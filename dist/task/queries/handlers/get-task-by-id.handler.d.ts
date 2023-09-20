import { IQueryHandler } from '@nestjs/cqrs';
import { GetTaskQuery } from '../impl/get-task.query';
import { Repository } from 'typeorm';
export declare class GetTaskByIdHandler implements IQueryHandler<GetTaskQuery> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(query: GetTaskQuery): Promise<Task>;
}
