import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getTasks(): Promise<Task[]>;
    getTaskById(): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTask(updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(taskId: string): void;
}
