"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTasksHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_tasks_query_1 = require("../get-tasks.query");
const task_service_1 = require("../../task.service");
let GetTasksHandler = class GetTasksHandler {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async execute(query) {
        return this.taskService.getTasks();
    }
};
exports.GetTasksHandler = GetTasksHandler;
exports.GetTasksHandler = GetTasksHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_tasks_query_1.GetTasksQuery),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], GetTasksHandler);
//# sourceMappingURL=get-tasks.handler.js.map