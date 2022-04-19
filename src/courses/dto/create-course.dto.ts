import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MinLength,
} from 'class-validator';
import { dummyInstructor } from '../entities/dummyInstructor.entity';
import { dummyManager } from '../entities/dummyManger.entity';

export class CreateCourseDto {
  @IsNotEmpty()
  @MinLength(4)
  name: string;
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;
  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  instructedBy: dummyInstructor;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  capacity: number;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  plannedBy: dummyManager;
}
