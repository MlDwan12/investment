import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';
import { Portfolio } from '../portfolio/entities/portfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Portfolio])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
