import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/courses.entity';
import { UpdateCourseDto } from './dto/update-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '1';
    date = new Date();
    });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create courses', async () => {
    const expetedOutputTags = [
      {
        id,
        name: 'nest JS',
        creates_at: date
      }
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'teste',
        description: 'teste description',
        created_at: date,
        tags: expetedOutputTags
      }
    ];

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };

    const mockTagsRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expetedOutputTags)),
      findOneBy: jest.fn()
    };

    //@ts-expect-error defined part of methods
    service['coursesRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository

    const createCourseDto : CreateCourseDto = {
      name: 'teste',
      description: 'teste description',
      tags: ['nest JS'],
    }

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(newCourse);
  });

  it('should list courses', async () => {
    const expetedOutputTags = [
      {
        id,
        name: 'nest JS',
        creates_at: date
      }
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'teste',
        description: 'teste description',
        created_at: date,
        tags: expetedOutputTags
      }
    ];

    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };

    //@ts-expect-error defined part of methods
    service['coursesRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(courses);
  });

  it('should find course', async () => {
    const expetedOutputTags = [
      {
        id,
        name: 'nest JS',
        creates_at: date
      }
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'teste',
        description: 'teste description',
        created_at: date,
        tags: expetedOutputTags
      }
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };

    //@ts-expect-error defined part of methods
    service['coursesRepository'] = mockCourseRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course);
  });

  it('should update courses', async () => {
    const expetedOutputTags = [
      {
        id,
        name: 'nest JS',
        creates_at: date
      }
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'teste',
        description: 'teste description',
        created_at: date,
        tags: expetedOutputTags
      }
    ];

    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    const mockTagsRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expetedOutputTags)),
      findOneBy: jest.fn()
    };

    //@ts-expect-error defined part of methods
    service['coursesRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagsRepository

    const updateCourseDto : UpdateCourseDto = {
      name: 'teste',
      description: 'teste description',
      tags: ['nest JS'],
    }

    const course = await service.update(id, updateCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course);
  });

  it('should delete course', async () => {
    const expetedOutputTags = [
      {
        id,
        name: 'nest JS',
        creates_at: date
      }
    ];

    const expectedOutputCourse = [
      {
        id,
        name: 'teste',
        description: 'teste description',
        created_at: date,
        tags: expetedOutputTags
      }
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['coursesRepository'] = mockCourseRepository;

    const course = await service.delete(id);

    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course);
  });


});



