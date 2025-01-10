import { Controller, Get } from '@nestjs/common';
import { TestService } from './services/test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTestMessage(): string {
    return this.testService.getTestMessage();
  }
}
