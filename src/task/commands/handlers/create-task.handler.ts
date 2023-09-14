import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../create-task.command';
import { TaskService } from '../../task.service';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  async execute(command: CreateTaskCommand) {
    const { createTaskDto } = command;
    return this.taskService.createTask(createTaskDto);
  }
}