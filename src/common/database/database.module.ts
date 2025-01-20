import { Module } from "@nestjs/common";
import { MysqlPrismaService } from "./sql/mysqlPrisma.service";

@Module({
    imports: [],
    providers: [MysqlPrismaService],
})

export class DatabaseModule {}