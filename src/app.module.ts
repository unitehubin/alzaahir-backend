import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.modules';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [CommonModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
