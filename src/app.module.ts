import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventsModule} from "./Events/events.module";
import {EventsGateway} from "./Events/event.gateway";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {
}
