import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganismService } from './organism.service';
import { CreateOrganismDto } from './dto/create-organism.dto';
import { UpdateOrganismDto } from './dto/update-organism.dto';

@Controller('organism')
export class OrganismController {
  constructor(private readonly organismService: OrganismService) {}

  

  @Get()
  findAll() {
    return this.organismService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organismService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganismDto: UpdateOrganismDto) {
    return this.organismService.update(+id, updateOrganismDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organismService.remove(+id);
  }
}
