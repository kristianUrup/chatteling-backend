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
  async onMessageReceive(client: Socket, @MessageBody() message: string) {
    client.broadcast.emit('chat', message);
  }

  public EmitActiveUsersCount() {
    const nUsers = this.usersService.getActiveUsers().length;
    this.server.emit('active-users', nUsers);
  }
}
