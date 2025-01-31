import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const logger = new Logger();

export const MongooseConfig = MongooseModule.forRootAsync({
  useFactory: async (config: ConfigService) => ({
    retryAttempts: 5,
    uri: config.get('MONGO_URI'),
    connectionFactory: (connection) => {
      if (connection.readyState === 1) {
        logger.log(`Mongoose DB connected to ${config.get('MONGO_URI')}`);
      }
      connection.on('disconnected', () => {
        logger.error(
          `Mongoose DB disconnected from ${config.get('MONGO_URI')}`,
        );
      });
      return connection;
    },
    connectionErrorFactory: (error) => {
      logger.error(`Database connection error: ${error}`);
      throw new Error(`Database connection error: ${error.message}`);
    },
  }),
  connectionName: 'default',
  inject: [ConfigService],
});
