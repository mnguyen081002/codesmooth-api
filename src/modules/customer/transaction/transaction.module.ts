import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionService } from "./transaction.service";
import { TransactionController } from "./transaction.controller";
import { TransactionEntity } from "../../../entities/transaction.entity";
import { CourseEntity } from "../../../entities/course.entity";
import { UserEntity } from "../../../entities/user.entity";
import { CourseModule } from "../course/course.module";
import { LogTransError } from "../../../entities/log_transaction.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity, CourseEntity, UserEntity, LogTransError]),
    CourseModule,
  ],
  providers: [TransactionService],
  controllers: [TransactionController],
  exports: [TransactionService],
})
export class TransactionModule {}
