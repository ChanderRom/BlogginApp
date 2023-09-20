import { IQueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { GetTaskQuery } from '../impl/get-task.query';
export declare class GetTaskByIdHandler implements IQueryHandler<GetTaskQuery> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(query: GetTaskQuery): Promise<Task>;
}
