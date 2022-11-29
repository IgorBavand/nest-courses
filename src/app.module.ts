import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { coursesProviders } from './courses/courses.providers';

@Module({
  imports: [
    CoursesModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
