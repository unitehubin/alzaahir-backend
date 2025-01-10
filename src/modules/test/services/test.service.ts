import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor() {}

  getTestMessage(): string {
    return 'Test Message';
  }
}
