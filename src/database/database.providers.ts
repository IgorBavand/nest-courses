import { DataSource } from 'typeorm';
import { CoursesRefactoring1669260403715 } from '../../db/migrations/1669260403715-CoursesRefactoring';
import { Tag } from '../courses/entities/tag.entity';
import { Course } from '../courses/entities/courses.entity';
import { CoursesTestMigration1669497429351 } from '../../db/migrations/1669497429351-CoursesTestMigration';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'fredprateado',
        database: 'postgres',
        entities: [
          __dirname + '/../**/*.entity.js',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'fredprateado',
  database: 'postgres',
  entities: [
    __dirname + '/../**/*.entity.js',
  ],
  synchronize: true,
  migrations: [
    CoursesRefactoring1669260403715,
    CoursesTestMigration1669497429351 // remove tabela course (foi criada errado)
  ],
});
