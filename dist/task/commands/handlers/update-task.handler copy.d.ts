import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../update-task.command';
import { TaskService } from '../../task.service';
export declare class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
    private readonly taskService;
    constructor(taskService: TaskService);
    execute(command: UpdateTaskCommand): Promise<import("../../entity/task.entity").Task>;
}
