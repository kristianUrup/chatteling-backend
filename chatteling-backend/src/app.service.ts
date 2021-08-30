import { Injectable } from '@nestjs/common';
import {User} from "./models/user";

@Injectable()
export class AppService {

  list: User[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  registerUser(user: User): void {
    let usernameTaken = this.list.some(value => value.username == user.username)
    if(!usernameTaken){
      this.list.push((user));
    }
  }
}
