import { IQueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from '../get-tasks.query';
import { TaskService } from '../../task.service';
export declare class GetTaskByIdHandler implements IQueryHandler<GetTasksQuery> {
    private readonly taskService;
    constructor(taskService: TaskService);
    execute(query: GetTasksQuery): Promise<void>;
}
