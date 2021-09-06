import {User} from '../models/user';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from '../services/users.service';
import {ChatGateway} from '../gateways/chat.gateway';

@Controller('users')
export class UsersController {
  constructor(
    private readonly appService: UsersService,
    private readonly usersGateWay: ChatGateway,
  ) {}

  @Get()
  getAllUsers(): User[] {
    return this.appService.getActiveUsers();
  }

  @Get('count')
  getUsersCount(): number {
    return this.appService.getActiveUsers().length;
  }

  @Post()
  registerUser(@Body() user: User): void {
    this.appService.registerUser(user);
    this.usersGateWay.emitNewUser(user);
  }
}

