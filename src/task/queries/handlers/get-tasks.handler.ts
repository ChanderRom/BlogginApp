import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { GetTasksQuery } from '../impl/get-tasks.query';


@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>
    ) {}

    async execute() {
        return this.taskRepository.find({})
    }

}