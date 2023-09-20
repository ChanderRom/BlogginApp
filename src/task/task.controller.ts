import { Controller, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs'; 

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
}
