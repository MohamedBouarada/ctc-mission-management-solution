import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course) private courseRepository: Repository<Course> ){}
 
 
 async create(createCourseDto: CreateCourseDto):Promise<Course> {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }
  async findAllPaginated(offset:number,take:number):Promise<Course[]>{
    return await this.courseRepository.find({
      take:take,
      skip:offset
    });
  }

  async findOne(id: number):Promise<Course> {
    const c = await this.courseRepository.findOneBy({Id:id});
        if(c){
            return c;
        }
        throw new NotFoundException(`course with id ${id} does not exist`);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const c=await this.courseRepository.preload({
      Id:id,
      ...updateCourseDto
    });
    if(c){
      return await this.courseRepository.save(c);
     }
      throw new NotFoundException(`course with id ${id} does not exist.`);
  }

  async delete(id: number):Promise<UpdateResult> {
    const c = await this.courseRepository.softDelete(id);
    if(c.affected){
        return c;
    }
    throw new NotFoundException(`course with id ${id} does not exist`);
  }

  async hardDelete(id:number):Promise<DeleteResult>{
    const c = await this.courseRepository.delete(id);
    if(c.affected){
        return c;
    }
    throw new NotFoundException(`course with id ${id} does not exist`);
}
}
