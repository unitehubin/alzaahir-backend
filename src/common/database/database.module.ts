import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MongooseConfig } from './mongodb/mongoos.module';


@Module({
  imports: [MongooseConfig],
  exports: [PrismaService],
})
export class DatabaseModule {}
