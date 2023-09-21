import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto, UpdateTaskDto } from './dto';
export declare class TaskController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    update(updateTaskDto: UpdateTaskDto, id: string): Promise<Task>;
    delete(id: string): Promise<any>;
}
