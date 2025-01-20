import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/alzaahir-dev/client';

@Injectable()
export class MysqlPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect();
  }
}
