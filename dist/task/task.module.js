"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const task_service_1 = require("./task.service");
const task_controller_1 = require("./task.controller");
const update_task_handler_copy_1 = require("./commands/handlers/update-task.handler copy");
const get_tasks_handler_1 = require("./queries/handlers/get-tasks.handler");
const get_task_by_id_handler_1 = require("./queries/handlers/get-task-by-id.handler");
const delete_task_handler_1 = require("./commands/handlers/delete-task.handler");
const create_task_handler_1 = require("./commands/handlers/create-task.handler");
const database_module_1 = require("../config/database.module");
const task_providers_1 = require("./task.providers");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            database_module_1.DatabaseModule,
        ],
        providers: [
            update_task_handler_copy_1.UpdateTaskHandler,
            task_service_1.TaskService,
            get_tasks_handler_1.GetTasksHandler,
            get_task_by_id_handler_1.GetTaskByIdHandler,
            delete_task_handler_1.DeleteTaskHandler,
            create_task_handler_1.CreateTaskHandler,
            ...task_providers_1.taskProviders,
        ],
        controllers: [task_controller_1.TaskController]
    })
], TaskModule);
//# sourceMappingURL=task.module.js.map