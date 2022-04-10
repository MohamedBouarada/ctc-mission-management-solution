import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get('/:id')
    getUser(@Param('id') id:number):Promise<User>{
        return this.userService.getUser(id);
    }

    @Get()
    getUsers():Promise<User[]>{
        return this.userService.getUsers();
    }

    @Patch('/:id')
    updateUser(@Param('id')id:number, @Body() updateUserDto : UpdateUserDto) : Promise<User>{
        return this.userService.updateUser(id,updateUserDto);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number):Promise<UpdateResult>{
        return this.userService.softDelete(id);
    }


}
