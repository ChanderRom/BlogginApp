import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from '../get-tasks.query';
import { TaskService } from '../../task.service';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@QueryHandler(GetTasksQuery)
export class GetTaskByIdHandler implements IQueryHandler<GetTasksQuery> {
  constructor(
    @Inject('TASK_REPOSITORY')
    private readonly taskRepository: Repository<Task>,
) {}

  async execute(query: GetTasksQuery) {
    return
  }
}