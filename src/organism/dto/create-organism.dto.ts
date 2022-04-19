import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

import { OrganismNautreEnum } from '../enums/organism-nature.enum';
import { User } from '../../user/entities/user.entity';

export class CreateOrganismDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  activity: string;

  @IsNotEmpty()
  @IsNumberString()
  taxRegistrationNumber: string;

  @IsNotEmpty()
  contactPersonPosition: string;

  @IsNotEmpty()
  @IsEnum(OrganismNautreEnum)
  nature: OrganismNautreEnum;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @IsPositive()
  numberOfEmployees: number;

  @IsOptional()
  subsidiary: string;

  @IsOptional()
  trainingNeeds: string;

  @Type(() => Number)
  @IsNumber()
  contactPerson: User;
}
