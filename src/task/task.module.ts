import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';

import { UpdateTaskHandler } from './commands/handlers/update-task.handler copy';
import { GetTasksHandler } from './queries/handlers/get-tasks.handler';
import { GetTasksByIdHandler } from './queries/handlers/get-task-by-id.handler';
import { DeleteTaskHandler } from './commands/handlers/delete-task.handler';
import { CreateTaskHandler } from './commands/handlers/create-task.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    UpdateTaskHandler,
    TaskService,
    GetTasksHandler,
    GetTasksByIdHandler,
    DeleteTaskHandler,
    CreateTaskHandler,
  ],
  controllers: [TaskController]
})
export class TaskModule {}
