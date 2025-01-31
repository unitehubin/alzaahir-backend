import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.APP_NAME ?? 'Alzaahir',
    env: process.env.APP_ENV ?? 'development',
    http: {
      host: process.env.HTTP_HOST ?? 'localhost',
      port: process.env.HTTP_PORT
        ? Number.parseInt(process.env.HTTP_PORT, 10)
        : 3000,
    },
  }),
);
