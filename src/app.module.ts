import { Module } from '@nestjs/common';
import {
  UsersController,
} from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ChatGateway } from './gateways/chat.gateway';
import { DataSource } from './dataSource/dataSource';
import {MessagesController} from "./controllers/messagesController";

@Module({
  imports: [],
  controllers: [UsersController, MessagesController],
  providers: [UsersService, DataSource, ChatGateway],
})
export class AppModule {}
