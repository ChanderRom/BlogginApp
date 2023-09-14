import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskCommand } from '../delete-task.command';
import { TaskService } from '../../task.service';
export declare class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
    private readonly taskService;
    constructor(taskService: TaskService);
    execute(command: DeleteTaskCommand): Promise<void>;
}
