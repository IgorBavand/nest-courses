import { DataSource } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { Course } from './entities/courses.entity';

export const coursesProviders = [
  {
    provide: 'COURSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'TAGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tag),
    inject: ['DATA_SOURCE'],
  },
];