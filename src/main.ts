import { NestApplication, NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const HOST: string = configService.get<string>('HTTP_HOST');
  const PORT: string = configService.get<string>('HTTP_PORT');
  const logger = new Logger();
  logger.log(`Server is running on ${HOST}:${PORT}`);
  await app.listen(PORT);
}

bootstrap();
