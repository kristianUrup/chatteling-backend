<<<<<<< HEAD
import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import * as SocketIO from 'socket.io';
import {EventsGateway} from "./Events/event.gateway";
=======
import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./models/user";
>>>>>>> 56682ca907d4fbe1370b262cbaefde65e2a9ba6e

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly event: EventsGateway
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

<<<<<<< HEAD
  @Post("user")
  getIO(): any {
    return this.event.server.emit("events", 1);
  }

=======
  @Post("registerUser")
  registerUser(@Body() user): void {
    this.appService.registerUser(user);
  }

  @Get("getActiveUsers")
  getActiveUsers() : User[] {
    return this.appService.list;
  }
>>>>>>> 56682ca907d4fbe1370b262cbaefde65e2a9ba6e
}
