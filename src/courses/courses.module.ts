import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { Tag } from './entities/tag.entity';
import { DatabaseModule } from '../database/database.module';
import { coursesProviders } from './courses.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    ...coursesProviders,
    CoursesService
  ],
  controllers: [CoursesController]
})
export class CoursesModule {}
