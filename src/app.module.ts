import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskModule } from './task/task.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { databaseProviders } from './config/database.providers';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [
    DatabaseModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
