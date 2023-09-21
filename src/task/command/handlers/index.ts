import { CreateTaskHandler } from "./create-task.handler";
import { DeleteTaskHandler } from "./delete-task.handler";
import { UpdateTaskHandler } from './update-task.handler';


export const CommandHandlers = [
    CreateTaskHandler,
    UpdateTaskHandler,
    DeleteTaskHandler,
]