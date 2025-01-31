import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import configs from '../configs';

// const ENV = process.argv[2] || 'development';

const ENV_FILE_PATH = process.cwd() + '/env/dev.env';
// add env file path based on the environment (production, development, staging)

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: [ENV_FILE_PATH],
      expandVariables: true,
    }),
    DatabaseModule,
  ],
})
export class CommonModule {}
