import { IQueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from '../get-tasks.query';
import { Repository } from 'typeorm';
export declare class GetTaskByIdHandler implements IQueryHandler<GetTasksQuery> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(query: GetTasksQuery): Promise<void>;
}
