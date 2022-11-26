import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {

  private readonly NOT_FOUND_MENSAGE : string = 'curso nao encontrado!';

  constructor (
    @InjectRepository(Course)
    private readonly coursesRepository : Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository : Repository<Tag>
  ) {}

  findAll() {
    //adicionar o relations faz com que traga no find as tags relacionadas aos cursos
    return this.coursesRepository.find({ relations: ['tags'] });
  }

  async create(course : CreateCourseDto) {

    //processa todas as promises antes de seguir adiante
    const tags = await Promise.all(
      course.tags.map((name) => this.preloadTagByName(name)),
    );

    //create prepara os dados no objeto e o save salva de fato
    const courseSave = this.coursesRepository.create({
      ...course,
      tags
    });
    return this.coursesRepository.save(courseSave);
  }

  async update(id : string, updateDto : UpdateCourseDto) {

    const tags = updateDto.tags && (
      await Promise.all(
        updateDto.tags.map((name) => this.preloadTagByName(name)),
    ));

    const course = await this.coursesRepository.preload({
      //para converter em numerico é id: +id
      id: +id,
      ...updateDto,
      tags
    });

    if(!course){
      throw new NotFoundException(this.NOT_FOUND_MENSAGE);
    }

    return this.coursesRepository.save(course);
  }

  async delete(id: string) {

    const course = await this.coursesRepository.findBy({ id: +id });

    if(!course){
      throw new NotFoundException(this.NOT_FOUND_MENSAGE);
    }

    return this.coursesRepository.remove(course);
  }

  //verifica se existe a tag, se nao exiate ela é criada
  private async preloadTagByName(name : string) : Promise<Tag> {
    const tag = await this.tagRepository.findOneBy({name: name});

    if(tag) {
      return tag;
    }

    return this.tagRepository.create({name});
  }
}
