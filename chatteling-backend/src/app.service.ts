import { Injectable } from '@nestjs/common';
import {User} from "./models/user";

@Injectable()
export class AppService {

<<<<<<< HEAD
  constructor() {
  }
=======
  list: User[] = [];
>>>>>>> 56682ca907d4fbe1370b262cbaefde65e2a9ba6e

  getHello(): string {
    return 'Hello World!';
  }
<<<<<<< HEAD
  getIO(): any {
    return "NOTHING";
  }


  Createsocket() {
    /*const io = require("socket.io")(5000);
    io.on("connection", socket => {
      socket.emit("greetings", {"ms": "john"}, Buffer.from([4,3,2,1]));

      socket.on("salutations", (elem1, elem2, elem3) => {
        console.log(elem1, elem2, elem3)
      })
    })*/
=======

  registerUser(user: User): void {
    let usernameTaken = this.list.some(value => value.username == user.username)
    if(!usernameTaken){
      this.list.push((user));
    }
>>>>>>> 56682ca907d4fbe1370b262cbaefde65e2a9ba6e
  }
}

