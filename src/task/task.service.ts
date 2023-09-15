import { Body, Get, Inject, Injectable, NotFoundException, Post } from '@nestjs/common';

import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetTasksQuery } from './queries/get-tasks.query';
import { CreateTaskCommand } from './commands/create-task.command';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private readonly taskRepository: Repository<Task>,
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async findTasks(): Promise<Task[] | null> {
        const tasks = this.taskRepository.find()

        return tasks
    }

    async findTaskById(id: string): Promise<Task | null> {
        const task = this.taskRepository.findOne({where: {id}})

        return task
    }
}
