import { IsNotEmpty } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import { UseFilters } from "@nestjs/common";
import { UploadExceptionFilter } from "../upload-exception.filter";


export class CreateInstructorDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;
}
