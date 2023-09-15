import { DataSource } from 'typeorm';
import { Task } from './entity/task.entity';
export declare const taskProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Task>;
    inject: string[];
}[];
