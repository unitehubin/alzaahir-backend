import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

const ENV = process.argv[2] || 'development';

let ENV_FILE_PATH = process.cwd() + '/env/dev.env';
// add env file path based on the environment (production, development, staging)

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: [ENV_FILE_PATH],
        })
    ],
})

export class CommonModule {}