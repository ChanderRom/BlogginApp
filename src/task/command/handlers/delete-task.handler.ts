import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteTaskCommand } from '../impl';
import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { Repository } from "typeorm";

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}

    async execute(command: DeleteTaskCommand): Promise<void> {
        const { id } = command
        
        const task = await this.taskRepository.findOneBy({id})

        if(!task) {
            throw new HttpException(`Tha task with id ${id} doesn't exsit`, HttpStatus.NOT_FOUND)
        }

        await this.taskRepository.remove(task)
    }

}