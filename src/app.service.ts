import { Injectable } from '@nestjs/common';
import { db } from './db';
import { users } from './db/schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async test() {
    const data = await db.select().from(users);
    return data;
  }
}
