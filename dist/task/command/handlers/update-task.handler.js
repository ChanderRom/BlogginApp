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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const impl_1 = require("../impl");
let UpdateTaskHandler = class UpdateTaskHandler {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(command) {
        const { id, title, description, completed } = command;
        const task = await this.taskRepository.findOneBy({ id });
        if (!task) {
            throw new common_1.HttpException(`Tha task with id ${id} doesn't exsit`, common_1.HttpStatus.NOT_FOUND);
        }
        const updatedTask = await this.taskRepository.save(Object.assign(Object.assign({}, task), { title,
            description,
            completed }));
        console.log(`Task with id ${id} updated successfully`);
        return updatedTask;
    }
};
exports.UpdateTaskHandler = UpdateTaskHandler;
exports.UpdateTaskHandler = UpdateTaskHandler = __decorate([
    (0, cqrs_1.CommandHandler)(impl_1.UpdateTaskCommand),
    __param(0, (0, common_1.Inject)('TASK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UpdateTaskHandler);
//# sourceMappingURL=update-task.handler.js.map