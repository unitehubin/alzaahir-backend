import { Module } from "@nestjs/common";
import { TestService } from "./services/test.service";
import { TestController } from "./test.controller";

@Module({
    controllers: [TestController],
    providers: [TestService]
})

export class TestModule {}