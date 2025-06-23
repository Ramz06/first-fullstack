import { Global, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format } from 'path';
import * as winston from "winston";

@Global()
@Module({
    imports: [
        WinstonModule.forRoot({
            format: winston.format.json(),
            transports: [new winston.transports.Console()]
        })
    ]
})
export class CommonModule {}
