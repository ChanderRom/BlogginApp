import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetTaskQuery } from '../impl/get-task.query';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';


@QueryHandler(GetTaskQuery)
export class GetTaskByIdHandler implements IQueryHandler<GetTaskQuery> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}

    async execute(query: GetTaskQuery) {
        const { id } = query
        return this.taskRepository.findOneBy({id})
    }
}