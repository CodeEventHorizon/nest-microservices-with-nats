import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  providers: [],
})
export class UsersModule {}
