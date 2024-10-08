import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Portfolio } from 'src/modules/portfolio/entities/portfolio.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { Role } from 'src/modules/role/entities/role.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  document: string;

  @Column()
  @IsDate()
  @IsNotEmpty()
  birth_day: Date;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile;
}
