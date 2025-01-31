import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.modules';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionHandler } from './interceptors/exception.handler';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [],
  providers: [
    // Logger,
    {
      provide: APP_FILTER,
      useClass: ExceptionHandler,
    },
  ],
})
export class AppModule {}
