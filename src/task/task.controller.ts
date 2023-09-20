import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs'; 

import { CreateTaskCommand } from './command/impl/create-task.command';
import { GetTaskQuery } from './queries/impl/get-task.query';
import { GetTasksQuery } from './queries/impl';

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
    async create(@Body() title: string, @Body() description: string): Promise<Task> {
        return this.commandBus.execute(new CreateTaskCommand(title, description))
    }
}
