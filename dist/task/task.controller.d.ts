import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly commandBus;
    private readonly queryBus;
    taskService: TaskService;
    constructor(commandBus: CommandBus, queryBus: QueryBus, taskService: TaskService);
    getTasks(): Promise<Task[] | null>;
    getTaskById(taskId: string): Promise<Task | null>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<any>;
}
