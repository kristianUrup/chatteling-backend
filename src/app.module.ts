import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ChatGateway } from './gateways/chat.gateway';
import { DataSource } from './dataSource/dataSource';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, DataSource, ChatGateway],
})
export class AppModule {}
