import { User } from '../models/user';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('active')
  getActiveUsers(): User[] {
    return this.appService.getActiveUsers();
  }

  @Post()
  registerUser(@Body() user): void {
    this.appService.registerUser(user);
  }
}
