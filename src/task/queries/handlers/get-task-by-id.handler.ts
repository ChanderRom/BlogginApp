import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from '../get-tasks.query';
import { TaskService } from '../../task.service';

@QueryHandler(GetTasksQuery)
export class GetTaskByIdHandler implements IQueryHandler<GetTasksQuery> {
  constructor(private readonly taskService: TaskService) {}

  async execute(query: GetTasksQuery) {
    return
  }
}