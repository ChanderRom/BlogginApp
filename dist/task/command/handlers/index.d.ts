import { CreateTaskHandler } from "./create-task.handler";
import { DeleteTaskHandler } from "./delete-task.handler";
import { UpdateTaskHandler } from './update-task.handler';
export declare const CommandHandlers: (typeof CreateTaskHandler | typeof UpdateTaskHandler | typeof DeleteTaskHandler)[];
