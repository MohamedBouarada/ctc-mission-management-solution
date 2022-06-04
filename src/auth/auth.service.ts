import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { OrganismService } from 'src/organism/organism.service';
import { CreateOrganismDto } from 'src/organism/dto/create-organism.dto';
import { hashPassword } from 'src/shared/hash-password';
import { MailService } from "../mail/mail.service";



@Injectable()
export class AuthService {

    constructor(private userService: UserService, private organismService:OrganismService ,private mailService:MailService){}

    async signup(createUserDto: CreateUserDto):Promise<Partial<User>>{
        createUserDto.password = await hashPassword(createUserDto.password);
        await this.mailService.sendUserConfirmation(createUserDto, "aaaaa");
        return this.userService.addUser(createUserDto);
    }

    signin():any{
        return "hello from signin";
    }

    organismSignup(createOrganismDto : CreateOrganismDto){
        return this.organismService.create(createOrganismDto);
    }
}

