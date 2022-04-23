import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findInstanceDto } from 'src/shared/find-instance.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentService {
 
  constructor(@InjectRepository(Enrollment) private enrollmentRepository: Repository<Enrollment>){}

  async create(createEnrollmentDto: CreateEnrollmentDto):Promise<Enrollment> {
    return await this.enrollmentRepository.save(createEnrollmentDto);
  }

  async findAll(): Promise<Enrollment[]> {
    return await this.enrollmentRepository.find();
  }
  async findAllPaginated(offset: number, take: number): Promise<Enrollment[]> {
    return await this.enrollmentRepository.find({
      take: take,
      skip: offset,
    });
  }
  async findAllSortedAndPaginated(findOptions: findInstanceDto) {
    const queryBuilder = this.enrollmentRepository.createQueryBuilder('Enrollment');
    const orderBy = findOptions.orderBy ? findOptions.orderBy : 'createdAt';
    const sort = findOptions.sort
      ? findOptions.sort === 'ASC'
        ? 'ASC'
        : 'DESC'
      : 'ASC';
    const page = findOptions.page ? findOptions.page : 1;
    const perPage = findOptions.perPage ? findOptions.perPage : 10;

    queryBuilder
      .orderBy(`Enrollment.${orderBy}`, sort)
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

  async findOne(id: number): Promise<Enrollment> {
    const enrollmentExists = await this.enrollmentRepository.findOne( id );
    if (enrollmentExists) {
      return enrollmentExists;
    }
    throw new NotFoundException(`Enrollment with id ${id} does not exist`);
  }

  async update(id: number, updateEnrollmentDto: UpdateEnrollmentDto):Promise<Enrollment> {
    const enrollmentToUpdate =await this.enrollmentRepository.preload({
      id,
      ...updateEnrollmentDto
    });
    if(enrollmentToUpdate){
      return await this.enrollmentRepository.save(enrollmentToUpdate);
    }
    else {
      throw new NotFoundException(`Enrollement with id ${id} does not exist.`);
    }
  }

  async delete(id: number): Promise<UpdateResult> {
    const enrollmentToDelete = await this.enrollmentRepository.softDelete(id);
    if (enrollmentToDelete.affected) {
      return enrollmentToDelete;
    }
    throw new NotFoundException(`enrollment with id ${id} does not exist`);
  }

  async hardDelete(id: number): Promise<DeleteResult> {
    const enrollmentToDelete = await this.enrollmentRepository.delete(id);
    if (enrollmentToDelete.affected) {
      return enrollmentToDelete;
    }
    throw new NotFoundException(`enrollment with id ${id} does not exist`);
  }
}
