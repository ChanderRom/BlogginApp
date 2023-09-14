import { CreateTaskDto } from "../dto/create-task.dto";
export declare class CreateTaskCommand {
    readonly createTaskDto: CreateTaskDto;
    constructor(createTaskDto: CreateTaskDto);
}
