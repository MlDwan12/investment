import { Module } from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { MarketDataController } from './market-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketData } from './entities/market-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MarketData])],
  controllers: [MarketDataController],
  providers: [MarketDataService],
})
export class MarketDataModule {}
