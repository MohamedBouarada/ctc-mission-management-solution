import {
  IsAlpha,
  IsEmail,
  IsEnum,
  IsIdentityCard,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Length,
  MinLength,
} from 'class-validator';
import { RolesEnum } from '../enums/roles.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlpha()
  firstName: string;

  @IsNotEmpty()
  @IsAlpha()
  lastName: string;

  @IsIdentityCard('ar-TN')
  cin: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsOptional()
  @IsEnum(RolesEnum)
  role: RolesEnum;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
