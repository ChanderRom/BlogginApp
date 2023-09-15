import { ICommandHandler } from "@nestjs/cqrs";
import { GetTasksCommand } from "../get-tasks.command";
import { Repository } from "typeorm";
export declare class GetTasksHandler implements ICommandHandler<GetTasksCommand> {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(): Promise<Task[]>;
}
