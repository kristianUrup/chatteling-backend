import { User } from '../models/user';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ChatGateway } from '../gateways/chat.gateway';

@Controller('users')
export class UsersController {
  constructor(
    private readonly appService: UsersService,
    private readonly usersGateWay: ChatGateway,
  ) {}

  @Get('active')
  getActiveUsers(): User[] {
    return this.appService.getActiveUsers();
  }

  @Post()
  registerUser(@Body() user: User): void {
    this.appService.registerUser(user);
    this.usersGateWay.onUserCreated();
  }
}
