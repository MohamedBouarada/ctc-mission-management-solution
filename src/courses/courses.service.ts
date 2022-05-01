import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { FindCourseDto } from './dto/find-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }
  async findAllPaginated(offset: number, take: number): Promise<Course[]> {
    return await this.courseRepository.find({
      take: take,
      skip: offset,
    });
  }
  async findAllSortedAndPaginated(findOptions: FindCourseDto) {
    const queryBuilder = this.courseRepository.createQueryBuilder('course');
    const orderBy = findOptions.orderBy ? findOptions.orderBy : 'createdAt';
    const sort = findOptions.sort
      ? findOptions.sort === 'ASC'
        ? 'ASC'
        : 'DESC'
      : 'ASC';
    const page = findOptions.page ? findOptions.page : 1;
    const perPage = findOptions.perPage ? findOptions.perPage : 10;

    queryBuilder
      .orderBy(`course.${orderBy}`, sort)
      .offset((page - 1) * perPage)
      .limit(perPage);
    const total = await queryBuilder.getCount();
    return {
      data: await queryBuilder.getMany(),
      total,
      page,
      numberOfPages: Math.ceil(total / perPage),
    };
  }

  async findOne(id: number): Promise<Course> {
    const courseExists = await this.courseRepository.findOne({where:{id}});
    if (courseExists) {
      return courseExists;
    }
    throw new NotFoundException(`course with id ${id} does not exist`);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const courseToUpdate = await this.courseRepository.preload({
      id: id,
      ...updateCourseDto,
    });
    if (courseToUpdate) {
      return await this.courseRepository.save(courseToUpdate);
    }
    throw new NotFoundException(`course with id ${id} does not exist.`);
  }

  async delete(id: number): Promise<UpdateResult> {
    const courseToDelete = await this.courseRepository.softDelete(id);
    if (courseToDelete.affected) {
      return courseToDelete;
    }
    throw new NotFoundException(`course with id ${id} does not exist`);
  }

  async hardDelete(id: number): Promise<DeleteResult> {
    const courseToDelete = await this.courseRepository.delete(id);
    if (courseToDelete.affected) {
      return courseToDelete;
    }
    throw new NotFoundException(`course with id ${id} does not exist`);
  }
}
