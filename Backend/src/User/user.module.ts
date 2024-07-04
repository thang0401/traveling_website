import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],// this one dedicates that this module can interact with databae 
  controllers: [UserController], // this statement is used to determine the controllers is a part of the module 
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
