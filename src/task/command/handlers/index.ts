import { CreateTaskHandler } from "./create-task.handler";
import { UpdateTaskHandler } from './update-task.handler';


export const CommandHandlers = [
    CreateTaskHandler,
    UpdateTaskHandler,
]