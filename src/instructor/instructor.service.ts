import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { FindInstructorDto } from './dto/find-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { Instructor } from './entities/instructor.entity';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor) private instructorRepository: Repository<Instructor>,
  ){}

  async create(createInstructorDto: CreateInstructorDto , cv : string) {
    const instructor = {
      cv : cv ,
      startDate : createInstructorDto.startDate,
      endDate : createInstructorDto.endDate ,
      user : createInstructorDto.user ,
    }
    return this.instructorRepository.save(instructor) ;
  }

  async findAll() {
    return this.instructorRepository.find();
  }

  async getAllinstructorsSortedAndPaginated(findOptions: FindInstructorDto) {
    const queryBuilder = this.instructorRepository.createQueryBuilder('instructor');
    const orderBy = findOptions.orderBy ? findOptions.orderBy : 'createdAt';
    const sort = findOptions.sort
      ? findOptions.sort === 'ASC'
        ? 'ASC'
        : 'DESC'
      : 'ASC';
    const page = findOptions.page ? findOptions.page : 1;
    const perPage = findOptions.perPage ? findOptions.perPage : 10;

    queryBuilder
      .orderBy(`instructor.${orderBy}`, sort)
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

  async findOne(id: number) {
    return this.instructorRepository.findOne({where:{id}});
  }

  async update(id: number, updateinstructorDto: UpdateInstructorDto) {
    const instructor = await this.instructorRepository.preload({
      id,
      ...updateinstructorDto,
    });
    if (!instructor) {
      throw new NotFoundException(`instructor with id ${id} does not exist`);
    }
    return this.instructorRepository.save(instructor);
  }

  async remove(id: number) {
    const result = await this.instructorRepository.softDelete(id);
    if (result.affected) return result;
    throw new NotFoundException(`instructor with id ${id} does not exist`);
  }
}
