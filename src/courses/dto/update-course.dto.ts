//para copiar as propriedades do create-course:
//npm i @nestjs/mapped-types

import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

//partial-type pega parte doq foi enviado e faz a mesma validação que há no create
export class UpdateCourseDto extends PartialType(CreateCourseDto){}