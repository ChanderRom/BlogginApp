import { IQueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from '../get-tasks.query';
import { TaskService } from '../../task.service';
export declare class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
    private readonly taskService;
    constructor(taskService: TaskService);
    execute(query: GetTasksQuery): Promise<Task[]>;
}
