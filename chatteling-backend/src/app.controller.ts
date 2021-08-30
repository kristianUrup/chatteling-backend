import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./models/user";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("registerUser")
  registerUser(@Body() user): void {
    this.appService.registerUser(user);
  }

  @Get("getActiveUsers")
  getActiveUsers() : User[] {
    return this.appService.list;
  }
}
