import { DataSource } from 'typeorm';
import { Task } from './entity/task.entity';
export declare const TaskProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Task>;
    inject: string[];
}[];
