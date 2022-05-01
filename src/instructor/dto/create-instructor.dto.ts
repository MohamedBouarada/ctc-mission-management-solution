import { IsNotEmpty } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateInstructorDto {
    @IsNotEmpty()
    user : User ;

    @IsNotEmpty()
    startDate : Date ;

    @IsNotEmpty()
    endDate : Date ;
}
