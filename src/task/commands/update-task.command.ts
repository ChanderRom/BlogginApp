import { UpdateTaskDto } from "../dto/update-task.dto";


export class UpdateTaskCommand {
    constructor(
        public readonly taskId: string,
        public readonly updateTaskDto: UpdateTaskDto
    ) {}
}