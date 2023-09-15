import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    getTasks(): Promise<Task[]>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<any>;
}
