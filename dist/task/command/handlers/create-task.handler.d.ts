import { ICommandHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";
import { CreateTaskCommand } from "../impl";
export declare class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(command: CreateTaskCommand): Promise<Task>;
}
