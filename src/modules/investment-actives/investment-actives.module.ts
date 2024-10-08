import { Module } from '@nestjs/common';
import { InvestmentActivesService } from './investment-actives.service';
import { InvestmentActivesController } from './investment-actives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentActive } from './entities/investment-active.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvestmentActive])],
  controllers: [InvestmentActivesController],
  providers: [InvestmentActivesService],
})
export class InvestmentActivesModule {}
