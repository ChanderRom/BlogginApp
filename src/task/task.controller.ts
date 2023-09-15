import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTaskCommand } from './commands/create-task.command';
import { GetTasksQuery } from './queries/get-tasks.query';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        public taskService: TaskService,
    ) {}

    @Get()
    async getTasks(): Promise<Task[] | null> {
        return this.queryBus.execute(new GetTasksQuery())
    }
    
    @Get(':id')
    async getTaskById(@Param('id') taskId: string ): Promise<Task | null> {

        const task = await this.taskService.findTaskById(taskId)

        if(!task) {
            throw new NotFoundException(`Task with id ${taskId} not found`)
        }

        return task as Task
    }

    @Post()
    async createTask(@Body() CreateTaskDto: CreateTaskDto) {
        const command = new CreateTaskCommand(CreateTaskDto)
        return this.commandBus.execute(command)
    }
}
