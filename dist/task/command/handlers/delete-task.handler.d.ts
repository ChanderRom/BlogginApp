import { ICommandHandler } from "@nestjs/cqrs";
import { DeleteTaskCommand } from '../impl';
import { Repository } from "typeorm";
export declare class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(command: DeleteTaskCommand): Promise<void>;
}
