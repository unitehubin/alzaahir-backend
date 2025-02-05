import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/alzaahir-dev/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
} 