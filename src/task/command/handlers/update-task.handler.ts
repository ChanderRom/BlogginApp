import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { UpdateTaskCommand } from "../impl";


@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}
    
    async execute(command: UpdateTaskCommand) {
        const { id, title, description, completed } = command
        const task = await this.taskRepository.findOneBy({id})

        if(!task) {
            throw new HttpException(`Tha task with id ${id} doesn't exsit`, HttpStatus.NOT_FOUND)
        }

        const updatedTask = await this.taskRepository.save({
            ...task,
            title,
            description,
            completed,
        })
        console.log(`Task with id ${id} updated successfully`)

        return updatedTask
    }
}