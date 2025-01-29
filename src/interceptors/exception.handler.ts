import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isArray } from 'class-validator';
import { STATUS_CODES } from 'http';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  constructor(
    private readonly configService: ConfigService,
    // private readonly logger: Logger,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR || 500; //fallback to 500 if the status code is not found
    let message = 'Internal Server Error';
    let errors: any[] | null = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const body = exception.getResponse() as any;
      if (typeof body === 'string') {
        message = body;
      } else if ('message' in body) {
        if (typeof body.message === 'string') {
          message = body.message;
        } else if (isArray(body.message) && body.message.length > 0) {
          message = body.message[0];
          errors = body.message;
        }
      }
      if (exception instanceof InternalServerErrorException) {
        Logger.error(exception.message, exception.stack);
      }
      if (exception instanceof UnauthorizedException) {
        if (message.toLocaleLowerCase().includes('invalid token')) {
          statusCode = STATUS_CODES.UNAUTHORIZED || 401;
          res.appenfHeader('instruction', 'logout');
        }
      }
    } else if (exception instanceof Error) {
      Logger.error(exception.message, exception.stack);
    } else {
      Logger.error(exception);
    }

    res.status(status).json({
      status: statusCode,
      message: message,
      errors: errors,
      url: req.url,
    });
  }
}
