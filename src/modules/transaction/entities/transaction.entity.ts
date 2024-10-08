import { IsNotEmpty, IsDecimal, IsString, IsNumber, IsUUID } from 'class-validator';
import { InvestmentActive } from 'src/modules/investment-actives/entities/investment-active.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { User } from 'src/modules/user';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @ManyToOne(() => Profile, (profile) => profile.transactions)
  profile: Profile;

  @ManyToOne(() => InvestmentActive, (asset) => asset.transactions)
  asset: InvestmentActive;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNumber()
  price: number;

  @Column()
  ///добавтить тип
  type: 'buy' | 'sell'; // Тип операции: покупка или продажа
}
