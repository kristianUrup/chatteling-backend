import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import * as SocketIO from 'socket.io';
import {EventsGateway} from "./Events/event.gateway";

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

  @Post("user")
  getIO(): any {
    return this.event.server.emit("events", 1);
  }

}
