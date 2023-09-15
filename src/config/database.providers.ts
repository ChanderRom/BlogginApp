import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                database: 'taskdb',
                entities: [__dirname + '/../**/entity/*.entity.ts'],
                synchronize: true,
            })

            return dataSource.initialize()
        }
    }
]