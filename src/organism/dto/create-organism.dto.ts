import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { OneToOne } from "typeorm";
import { OrganismNautreEnum } from "../enums/organism-nature.enum";

export class CreateOrganismDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    activity:string;

    @IsNotEmpty()
    @IsNumberString()
    taxRegistrationNumber:string;

    @IsNotEmpty()
    contactPersonPosition:string;

    @IsNotEmpty()
    @IsEnum(OrganismNautreEnum)
    nature:OrganismNautreEnum;


    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    numberOfEmplyees:number;

    @IsOptional()
    subsidiary:string;

    @IsOptional()
    trainingNeeds:string;

}
