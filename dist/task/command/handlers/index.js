"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlers = void 0;
const create_task_handler_1 = require("./create-task.handler");
const update_task_handler_1 = require("./update-task.handler");
exports.CommandHandlers = [
    create_task_handler_1.CreateTaskHandler,
    update_task_handler_1.UpdateTaskHandler,
];
//# sourceMappingURL=index.js.map