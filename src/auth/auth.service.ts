import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';



@Injectable()
export class AuthService {

    constructor(private userService: UserService){}

    async signup(createUserDto: CreateUserDto):Promise<Partial<User>>{
        const saltRounds = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, saltRounds);
        createUserDto.password = hash;
        return this.userService.addUser(createUserDto);
    }

    signin():any{
        return "hello from signin";
    }
}

