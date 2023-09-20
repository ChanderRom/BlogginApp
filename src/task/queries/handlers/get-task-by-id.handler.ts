import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { GetTaskQuery } from '../impl/get-task.query';


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