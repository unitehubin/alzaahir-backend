import { Module } from '@nestjs/common';
import { MysqlPrismaService } from './sql/mysqlPrisma.service';
import { MongooseConfig } from './mongodb/mongoos.module';

@Module({
  imports: [MongooseConfig],
  providers: [MysqlPrismaService],
})
export class DatabaseModule {}
