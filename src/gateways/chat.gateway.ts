import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from '../services/users.service';
import { MessageIn } from '../models/messageIn';
import { Message } from '../models/message';
import { User } from '../models/user';

@WebSocketGateway()
export class ChatGateway {
  constructor(private usersService: UsersService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async onMessageReceive(client: Socket, @MessageBody() message: MessageIn) {
    const msg = this.usersService.postMessage(message.from, message.content);
    this.server.emit('messages-new', msg);
  }
  
  @SubscribeMessage('user-typing-client')
  async onMessageTyping(client: Socket, @MessageBody() userTyping: string) {
    this.server.emit('user-typing-server', userTyping);
  }

  @SubscribeMessage('user-drop-typing-client')
  async onMessageDropTyping(client: Socket, @MessageBody() userTyping: string) {
    this.server.emit('user-drop-typing-server', userTyping)
  }

  public onUserCreated() {
    this.emitUsersData();
    const msgs = this.usersService.getMessages();
    this.server.emit('messages-all', msgs);
  }

  private emitUsersData() {
    const users = this.usersService.getActiveUsers();
    const nUsers = users.length;
    this.server.emit('active-users-count', nUsers);
    this.server.emit('active-users', users);
  }

  public emitNewUser(user: User): void {
    const users = this.usersService.getActiveUsers();
    const nUsers = users.length;
    this.server.emit('active-users-new', user);
    this.server.emit('active-users-count', nUsers);
  }

  public emitNewMessage(msg: Message): void {
    this.server.emit('messages-new', msg);
  }
}
