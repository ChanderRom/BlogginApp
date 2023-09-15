"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProviders = void 0;
const task_entity_1 = require("./entity/task.entity");
exports.taskProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(task_entity_1.Task),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=task.providers.js.map