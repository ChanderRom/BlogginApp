import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../create-task.command';
import { TaskService } from '../../task.service';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
) {}

  async execute(command: CreateTaskCommand): Promise<Task> {
    const { createTaskDto } = command;
    const task = this.taskRepository.create(createTaskDto)
    await this.taskRepository.save(task)
    return task
  }
}