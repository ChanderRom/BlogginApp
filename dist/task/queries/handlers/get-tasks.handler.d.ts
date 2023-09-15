import { IQueryHandler } from "@nestjs/cqrs";
import { Repository } from "typeorm";
import { GetTasksQuery } from "../get-tasks.query";
export declare class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    execute(): Promise<Task[]>;
}
