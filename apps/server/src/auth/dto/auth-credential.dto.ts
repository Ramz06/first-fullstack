import {
  IsEmail,
  IsString,
  MaxLength,
  maxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialDto {
  @IsEmail(
    {},
    {
      message: 'Plase enter a valid email address.',
    },
  )
  email: string;

  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(32, {
    message: 'Password must not be longer than 32 characters',
  })
  password: string;
}
