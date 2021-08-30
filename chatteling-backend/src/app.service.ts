import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor() {
  }

  getHello(): string {
    return 'Hello World!';
  }
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
  }
}

