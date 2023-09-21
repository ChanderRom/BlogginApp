import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs'; 

import { CreateTaskCommand, DeleteTaskCommand, UpdateTaskCommand } from './command/impl';
import { GetTasksQuery, GetTaskQuery } from './queries/impl';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Controller('task')
export class TaskController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return this.queryBus.execute(new GetTasksQuery())
    } 
    
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Task> {
        return this.queryBus.execute(new GetTaskQuery(id))
    } 

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description, completed } = createTaskDto
        return this.commandBus.execute(new CreateTaskCommand(title, description, completed))
    }
    
    @Patch(':id')
    async update(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string): Promise<Task> {
        const { title, description, completed } = updateTaskDto
        return this.commandBus.execute(new UpdateTaskCommand(id, title, description, completed))
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.commandBus.execute(new DeleteTaskCommand(id))
    }
}
