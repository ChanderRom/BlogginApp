import { Module } from '@nestjs/common';
import { CqrsModule  } from '@nestjs/cqrs';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';

import { DatabaseModule } from 'src/config/database.module';
import { taskProviders } from './task.providers';
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
    ...taskProviders,
  ],
  controllers: [TaskController]
})
export class TaskModule {}
