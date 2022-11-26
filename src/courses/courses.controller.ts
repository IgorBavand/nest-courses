import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';
import * as Path from 'path';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

  constructor (
    private readonly courseService : CoursesService
  ) {}

  @Get()
  findAll(): any {
    return this.courseService.findAll();
  }

  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto): any {
    return this.courseService.create(createCourseDto);
  }

  @Patch(':id')
  updateCourse(@Body() updateForm: UpdateCourseDto, @Param() params) : any {
    return this.courseService.update(params.id, updateForm);
  }

  @Delete(':id')
  deleteCourse(@Param() params) {
    return this.courseService.delete(params.id);
  }
}
