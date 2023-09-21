import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HttpException, HttpStatus, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { GetTaskQuery } from '../impl/get-task.query';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@QueryHandler(GetTaskQuery)
export class GetTaskByIdHandler implements IQueryHandler<GetTaskQuery> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}

    async execute(query: GetTaskQuery): Promise<Task> {
        const { id } = query
        const task = await this.taskRepository.findOneBy({id})
        
        if(!task) {
            throw new HttpException(`Tha task with id ${id} doesn't exsit`, HttpStatus.NOT_FOUND)
        }
        
        return task
    }
}