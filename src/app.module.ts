import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import databaseConfig from './config/database/database.config';
import { loggerConfig } from './config/logger/logger.config';
import { UserModule } from './modules';
import { RoleModule } from './modules/role/role.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { ProfileModule } from './modules/profile/profile.module';
import { MarketDataModule } from './modules/market-data/market-data.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { InvestmentActivesModule } from './modules/investment-actives/investment-actives.module';
import { InvestmentModule } from './modules/investment/investment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [databaseConfig], isGlobal: true }),
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
        synchronize: process.env.NODE_ENV !== 'production',
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UserModule,
    RoleModule,
    TransactionModule,
    ProfileModule,
    MarketDataModule,
    PortfolioModule,
    InvestmentActivesModule,
    InvestmentModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  onModuleInit() {}
}
