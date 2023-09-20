import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";

import { UpdateTaskCommand } from "../impl";


@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}
    
    async execute(command: UpdateTaskCommand): Promise<Task> {
        const { id, title, description, completed } = command
        console.log({id})
        const task = await this.taskRepository.findOneBy({id})

        if(!task) {
            throw new Error(`Tha task with id ${id} doesn't exist.`)
        }

        const updatedTask = await this.taskRepository.save({
            ...task,
            title,
            description,
            completed,
        })

        return updatedTask
    }
}