import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  isStrongPassword,
  IsUUID,
} from 'class-validator';
import { userInfo } from 'os';
import { Portfolio } from 'src/modules/portfolio/entities/portfolio.entity';
import { Transaction } from 'src/modules/transaction/entities/transaction.entity';
import { User } from 'src/modules/user';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ default: false })
  @IsBoolean()
  isEmailVerified: boolean;

  @Column({ default: false })
  @IsBoolean()
  isProfileActive: boolean;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;

  @OneToMany(() => Portfolio, (portfolio) => portfolio.profile)
  portfolios: Portfolio[];

  @OneToMany(() => Transaction, (transaction) => transaction.profile)
  transactions: Transaction[];
}
