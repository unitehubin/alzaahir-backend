import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.modules';
import { TestModule } from './modules/test/test.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionHandler } from './interceptors/exception.handler';

@Module({
  imports: [CommonModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    // Logger,
    {
      provide: APP_FILTER,
      useClass: ExceptionHandler,
    },
  ],
})
export class AppModule {}
