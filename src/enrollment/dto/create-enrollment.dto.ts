import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Course } from "src/courses/entities/course.entity";
import { timeStamp } from "src/shared/time-stamp";
import { User } from "src/user/entities/user.entity";
import { statesEnum } from "../enums/states.enum";
import { userTypesEnum } from "../enums/user-types.enum";

export class CreateEnrollmentDto extends timeStamp{
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
     user:User;
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
     course:Course;
    @IsNotEmpty()
    @IsEnum(statesEnum)
     state:statesEnum;
    @IsNotEmpty()
    @IsEnum(userTypesEnum) 
    userType:userTypesEnum
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
     size:number;
    @IsNotEmpty()
     extraInformations:string;


}
