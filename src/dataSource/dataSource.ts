import { User } from '../models/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSource {
  users: User[] = [];
}
