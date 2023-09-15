import { ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../create-task.command';
import { Repository } from 'typeorm';
export declare class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(command: CreateTaskCommand): Promise<Task>;
}
