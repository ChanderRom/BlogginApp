import { CommandBus, QueryBus } from '@nestjs/cqrs';
export declare class TaskController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
}
