import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { email, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email already exist');
      }
      throw error;
    }
  }

  async signIn(authCredentialDto: AuthCredentialDto): Promise<{accessToken: string}> {
    const {email, password} = authCredentialDto;

    const user = await this.prisma.user.findUnique({
        where: {email}
    });

    if (user && (await bcrypt.compare(password, user.password))) {
        const payload: JwtPayload = {email: user.email, sub: user.id};
        const accessToken = await this.jwtService.sign(payload);

        return {accessToken};
    } else {
        throw new UnauthorizedException('Email or Password is wrong')
    }
  }
}
