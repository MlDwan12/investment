import { IsNumber, IsString, IsUUID } from 'class-validator';
import { InvestmentActive } from 'src/modules/investment-actives/entities/investment-active.entity';
import { Investment } from 'src/modules/investment/entities/investment.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { User } from 'src/modules/user';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Entity,
} from 'typeorm';

@Entity('portfolio')
export class Portfolio {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  name: string;

  @ManyToOne(() => Profile, (profile) => profile.portfolios)
  profile: Profile;

  @OneToMany(() => Investment, (investment) => investment.portfolio)
  investments: Investment[];

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  totalValue: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  profitLoss: number;
}
