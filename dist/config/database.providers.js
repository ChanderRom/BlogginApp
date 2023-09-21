"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const task_entity_1 = require("../task/entity/task.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                database: 'taskdb',
                entities: [task_entity_1.Task],
                synchronize: true,
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map