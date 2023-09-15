import { ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../create-task.command';
import { TaskService } from '../../task.service';
export declare class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    private readonly taskService;
    constructor(taskService: TaskService);
    execute(command: CreateTaskCommand): Promise<import("../../entity/task.entity").Task>;
}
