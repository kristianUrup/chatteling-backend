import {Body, Controller, Get, Post} from "@nestjs/common";
import {UsersService} from "../services/users.service";
import {ChatGateway} from "../gateways/chat.gateway";
import {Message} from "../models/message";
import {MessageIn} from "../models/messageIn";

@Controller('messages')
export class MessagesController {
    constructor(
        private readonly appService: UsersService,
        private readonly usersGateWay: ChatGateway,
    ) {
    }

    @Get()
    getAllMessages(): Message[] {
        return this.appService.getMessages();
    }

    @Post()
    registerUser(@Body() msg: MessageIn): void {
        const newMsg = this.appService.postMessage(msg.from, msg.content);
        this.usersGateWay.emitNewMessage(newMsg);
    }
}
