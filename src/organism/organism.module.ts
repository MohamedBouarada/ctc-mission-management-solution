import { Module } from '@nestjs/common';
import { OrganismService } from './organism.service';
import { OrganismController } from './organism.controller';
import { Organism } from './entities/organism.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Organism])],
  controllers: [OrganismController],
  providers: [OrganismService,Organism],
  exports:[OrganismService,Organism]
})
export class OrganismModule {}
