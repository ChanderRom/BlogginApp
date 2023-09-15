import { Task } from './entity/task.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
export declare class TaskService {
    private readonly taskRepository;
    private readonly commandBus;
    private readonly queryBus;
    constructor(taskRepository: Repository<Task>, commandBus: CommandBus, queryBus: QueryBus);
    findTasks(): Promise<Task[] | null>;
    findTaskById(id: string): Promise<Task | null>;
}
