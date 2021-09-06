import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { DataSource } from '../dataSource/dataSource';

@Injectable()
export class UsersService {
  constructor(private data: DataSource) {}

  registerUser(user: User): void {
    const usernameTaken = this.data.users.some(
      (value) => value.username == user.username,
    );
    if (!usernameTaken) {
      this.data.users.push(user);
    }
  }

  public getActiveUsers(): User[] {
    return this.data.users;
  }

  public getMessages(): Message[] {
    return this.data.messages;
  }

  public postMessage(from: string, content: string): Message {
    const msg = {
      from,
      sentAt: new Date(),
      content,
    } as Message;

    this.data.messages.push(msg);
    return msg;
  }
}

export interface Message {
  from: string;
  sentAt: Date;
  content: string;
}
