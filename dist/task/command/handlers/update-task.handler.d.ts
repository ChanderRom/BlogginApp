import { ICommandHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";
import { UpdateTaskCommand } from "../impl";
export declare class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(command: UpdateTaskCommand): Promise<Task>;
}
