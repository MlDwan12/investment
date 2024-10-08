import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './entities/portfolio.entity';
import { InvestmentActivesModule } from '../investment-actives/investment-actives.module';
import { InvestmentModule } from '../investment/investment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Portfolio]),
    InvestmentActivesModule,
    InvestmentModule,
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
