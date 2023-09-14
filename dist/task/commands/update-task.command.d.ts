import { UpdateTaskDto } from "../dto/update-task.dto";
export declare class UpdateTaskCommand {
    readonly taskId: string;
    readonly updateTaskDto: UpdateTaskDto;
    constructor(taskId: string, updateTaskDto: UpdateTaskDto);
}
