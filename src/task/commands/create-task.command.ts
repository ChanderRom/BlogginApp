import { ICommand } from "@nestjs/cqrs";
import { CreateTaskDto } from "../dto/create-task.dto";


export class CreateTaskCommand implements ICommand{
    constructor(public readonly createTaskDto: CreateTaskDto) {}
}