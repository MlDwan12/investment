import { Module, OnModuleInit } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import * as pino from 'pino';
import * as path from 'path';
import { multistream } from 'pino-multi-stream';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database/database.config';
import { loggerConfig } from './config/logger/logger.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [databaseConfig] }),
    loggerConfig,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {}
}
