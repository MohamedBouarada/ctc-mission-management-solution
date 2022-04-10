import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async getUser(id:number):Promise<User>{
        const user = await this.userRepository.findOne(id);
        if(user){
            return user;
        }
        throw new NotFoundException(`user with id ${id} does not exist`);
    }

    async getUserByEmail(email:string):Promise<User>{
        return await this.userRepository.findOne({email});
    }

    async getUsers():Promise<User[]>{
        return this.userRepository.find();
    }

    async addUser(createUserDto : CreateUserDto): Promise<Partial<User>>{

        const {email,cin,phoneNumber} = createUserDto;
        
        const user = await this.userRepository.findOne({where:[
            {email},
            {cin},
            {phoneNumber}
        ]});
        if(user){
            const errorMsgs = {
                email:'',
                phoneNumber:'',
                cin:''
            };
            if(user.cin === cin) errorMsgs['cin'] = 'Cin already used';
            if(user.email === email) errorMsgs['email'] = 'Email already used';
            if(user.phoneNumber === phoneNumber) errorMsgs['phoneNumber'] = 'Phone number already used';
            throw new ConflictException(errorMsgs);
        }

        const result = await this.userRepository.save(createUserDto);
        delete result.password;
        return result;

    }

    async updateUser(id:number, updateUserDto: UpdateUserDto) : Promise<User>{
        const user = await this.userRepository.preload({id,...updateUserDto});
        if(user){
            return this.userRepository.save(user);
        }
        throw new NotFoundException(`user with id ${id} does not exist.`);
    }

    async softDelete(id:number): Promise<UpdateResult>{
        const result = await this.userRepository.softDelete(id);
        if(result.affected){
            return result;
        }
        throw new NotFoundException(`user with id ${id} does not exist`);
    }

    async hardDelete(id:number):Promise<DeleteResult>{
        const result = await this.userRepository.delete(id);
        if(result.affected){
            return result;
        }
        throw new NotFoundException(`user with id ${id} does not exist`);
    }
}
