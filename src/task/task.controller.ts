import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTaskCommand } from './commands/create-task.command';
import { GetTasksQuery } from './queries/get-tasks.query';

@Controller('task')
export class TaskController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    async getTasks(): Promise<Task[]> {
        try {
            const query = new GetTasksQuery()
            const tasks = await this.queryBus.execute(query)
            console.log(tasks)
            return tasks
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    @Post()
    async createTask(@Body() CreateTaskDto: CreateTaskDto) {
        const command = new CreateTaskCommand(CreateTaskDto)
        return this.commandBus.execute(command)
    }
}
