import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateOrganismDto } from './dto/create-organism.dto';
import { UpdateOrganismDto } from './dto/update-organism.dto';
import { Organism } from './entities/organism.entity';

@Injectable()
export class OrganismService {

  constructor(@InjectRepository(Organism) private organismRepository:Repository<Organism>){}

  create(createOrganismDto: CreateOrganismDto) {
    return this.organismRepository.save(createOrganismDto);
  }

  findAll() {
    return this.organismRepository.find();
  }

  findOne(id: number) {
    return this.organismRepository.findOne(id);
  }

  async update(id: number, updateOrganismDto: UpdateOrganismDto) {
    const organism = await this.organismRepository.preload({id,...updateOrganismDto});
    if(!organism){
      throw new NotFoundException(`organism with id ${id} does not exist`);
    }
    return this.organismRepository.save(organism);
  }

  async remove(id: number) {
    const result = await this.organismRepository.softDelete(id);
    if(result.affected) return result;
    throw new NotFoundException(`organism with id ${id} does not exist`);
  }
}
