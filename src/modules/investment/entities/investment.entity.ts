import { IsNumber, IsUUID } from 'class-validator';
import { InvestmentActive } from 'src/modules/investment-actives/entities/investment-active.entity';
import { Portfolio } from 'src/modules/portfolio/entities/portfolio.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investment')
export class Investment {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @ManyToOne(() => Portfolio, (portfolio) => portfolio.investments)
  portfolio: Portfolio;

  @ManyToOne(() => InvestmentActive, (asset) => asset.investments)
  asset: InvestmentActive;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  purchasePrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  currentPrice: number;
}
