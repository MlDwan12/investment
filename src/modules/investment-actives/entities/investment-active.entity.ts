import { IsNumber, IsString, IsUUID } from 'class-validator';
import { Investment } from 'src/modules/investment/entities/investment.entity';
import { Portfolio } from 'src/modules/portfolio/entities/portfolio.entity';
import { Transaction } from 'src/modules/transaction/entities/transaction.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';

@Entity('investment-active')
export class InvestmentActive {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  symbol: string; // Например, AAPL, BTC, TSLA

  @Column()
  @IsString()
  name: string; // Полное название актива, например "Apple Inc."

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  currentPrice: number;

  @OneToMany(() => Investment, (investment) => investment.asset)
  investments: Investment[];

  @OneToMany(() => Transaction, (transaction) => transaction.asset)
  transactions: Transaction[]; // Связь с транзакциями
}
