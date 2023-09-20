import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    update(updateTaskDto: UpdateTaskDto, id: string): Promise<Task>;
}
