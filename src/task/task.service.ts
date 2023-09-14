import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {

    async getTasks(): Promise<Task[]> {
        return
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
