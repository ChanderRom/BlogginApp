import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { GetTasksQuery } from "../get-tasks.query";

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private taskRepository: Repository<Task>,
    ) {}

    async execute(): Promise<Task[]> {
        return await this.taskRepository.find()
    }
}