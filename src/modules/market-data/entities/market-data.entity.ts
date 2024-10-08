import { IsNotEmpty, IsString, IsDecimal, IsUUID } from 'class-validator';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class MarketData {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  assetName: string; // Название актива

  @Column('decimal')
  @IsNotEmpty()
  @IsDecimal()
  price: number; // Текущая цена

  @Column()
  @IsNotEmpty()
  @IsString()
  currency: string; // Валюта актива
}
