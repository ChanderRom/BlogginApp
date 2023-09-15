import { ICommand } from "@nestjs/cqrs";
import { CreateTaskDto } from "../dto/create-task.dto";
export declare class CreateTaskCommand implements ICommand {
    readonly createTaskDto: CreateTaskDto;
    constructor(createTaskDto: CreateTaskDto);
}
