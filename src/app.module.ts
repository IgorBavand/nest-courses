import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { Courses } from './courses';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot(dataSourceOptions), DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, Courses],
})
export class AppModule {}
