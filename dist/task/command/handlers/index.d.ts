import { CreateTaskHandler } from "./create-task.handler";
import { UpdateTaskHandler } from './update-task.handler';
export declare const CommandHandlers: (typeof UpdateTaskHandler | typeof CreateTaskHandler)[];
