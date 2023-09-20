import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";

import { CreateTaskCommand } from "../impl/create-task.command";


@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}
    
    async execute(command: CreateTaskCommand): Promise<Task> {
        const { title, description } = command
        return this.taskRepository.create({title, description})
    }
}