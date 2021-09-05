import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  users = 0;

  async handleConnection() {
    this.users++;
    this.server.emit('users-online', this.users);
  }

  async handleDisconnect() {
    this.users--;
    this.server.emit('users-online', this.users);
  }

  @SubscribeMessage('sendMessage')
  async onMessageReceive(client: Socket, @MessageBody() message: string) {
    client.broadcast.emit('chat', message);
  }

  @SubscribeMessage('test')
  handleEvent(data: string): string {
    console.log(data);
    return data;
  }
}
