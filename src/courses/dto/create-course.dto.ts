import { Type } from "class-transformer";
import { IsAlphanumeric, IsDate, IsDateString, IsDecimal, IsNotEmpty,  IsNumber, IsPositive, MinLength,  } from "class-validator";
import { dummyInstructor } from "../entities/dummyInstructor.entity";
import { dummyManager } from "../entities/dummyManger.entity";

export class CreateCourseDto {
    @IsNotEmpty()
    @MinLength(4)
     Name: string;
    @IsNotEmpty()
    @IsDateString()
     Date: string;
    @IsNotEmpty()
     Adresse: string;
    @IsNotEmpty()
    @Type(()=> Number)
    @IsNumber()
     InstructedBy: dummyInstructor;
    @IsNotEmpty()
     Description: string;
    @IsNotEmpty()
    @Type(()=> Number)
    @IsNumber()
    @IsPositive()
     Price: number;
    @IsNotEmpty()
    @Type(()=> Number)
    @IsNumber()
    @IsPositive()
     Capacity: number;
    @IsNotEmpty()
    @Type(()=> Number)
    @IsNumber()
     PlannifiedBy: dummyManager;

}
