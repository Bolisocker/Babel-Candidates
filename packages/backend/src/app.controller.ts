import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @HttpCode(200)
  getHealth(): void {
    return;
  }
}
