"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandlers = void 0;
const get_task_by_id_handler_1 = require("./get-task-by-id.handler");
const get_tasks_handler_1 = require("./get-tasks.handler");
exports.QueryHandlers = [
    get_task_by_id_handler_1.GetTaskByIdHandler,
    get_tasks_handler_1.GetTasksHandler,
];
//# sourceMappingURL=index.js.map