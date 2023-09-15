import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private taskRepository: Repository<Task>,
    ) {}

    async getTasks(): Promise<Task[]> {
        return this.taskRepository.find()
    }
    
    async getTaskById(): Promise<Task> {
        return
    }
    
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return
    }
    
    async updateTask(updateTaskDto: UpdateTaskDto): Promise<Task> {
        return
    }
    
    deleteTask(taskId: string): void {
    }
    
}
