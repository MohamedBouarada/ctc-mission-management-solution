import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  Res, UseFilters
} from "@nestjs/common";
import { InstructorService } from './instructor.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from './editFile';
import { FindOrganismDto } from 'src/organism/dto/find-organism.dto';
import { UploadExceptionFilter } from "./upload-exception.filter";

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post('upload')
  @UseFilters( UploadExceptionFilter)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
    }),
  )

  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createInstructorDto: CreateInstructorDto,
  ) {
    const filename = file.filename;
    return this.instructorService.create(createInstructorDto, filename);
  }

  @Get()
  findAll(@Query() findOptions: FindOrganismDto) {
    return this.instructorService.getAllinstructorsSortedAndPaginated(
      findOptions,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instructorService.findOne(+id);
  }

  @Get('/cv/:file')
  seeUploadedFile(@Param('file') file, @Res() res) {
    return res.sendFile(file, { root: './uploads' });
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
    }),
  )
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() updateInstructorDto: UpdateInstructorDto,
  ) {
    if (file) {
      return this.instructorService.update(
        +id,
        updateInstructorDto,
        file.filename,
      );
    }
    return this.instructorService.update(+id, updateInstructorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instructorService.remove(+id);
  }
  @Delete('/hard/:id')
  hardDelete(@Param('id') id: number) {
    return this.instructorService.hardDelete(id);
  }
}
