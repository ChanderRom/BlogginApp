import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    getTasks(): Promise<Task[]>;
    getTaskById(): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTask(updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(taskId: string): void;
}
