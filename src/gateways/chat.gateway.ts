import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from '../services/users.service';

@WebSocketGateway()
export class ChatGateway {
  constructor(private usersService: UsersService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async onMessageReceive(
    client: Socket,
    @MessageBody() message: { from: string; content: string },
  ) {
    const msg = this.usersService.postMessage(message.from, message.content);
    this.server.emit('messages-new', msg);
  }

  public onUserCreated() {
    const users = this.usersService.getActiveUsers();
    const nUsers = users.length;
    this.server.emit('active-users-count', nUsers);
    this.server.emit('active-users', users);
    const msgs = this.usersService.getMessages();
    this.server.emit('messages-all', msgs);
  }
}
