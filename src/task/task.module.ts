import { Module } from '@nestjs/common';
import { CqrsModule  } from '@nestjs/cqrs';


import { DatabaseModule } from 'src/config/database.module';
import { TaskController } from './task.controller';
import { TaskProviders } from './task.providers';
import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './command/handlers';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule,
  ],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    ...TaskProviders,
  ],
  controllers: [TaskController]
})
export class TaskModule {}
