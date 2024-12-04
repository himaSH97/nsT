import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import 'dotenv/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/app')
  app(): any {
    return 'No DATABASE_URL found';
  }

  @Get('/app2')
  app2(): any {
    return this.appService.test();
  }
}
