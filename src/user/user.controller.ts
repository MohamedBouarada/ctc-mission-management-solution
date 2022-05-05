import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getOneUser(id);
  }

  @Get()
  getUsers(@Query() findOptions: FindUserDto) {
    return this.userService.getAllUsersSortedAndPaginated(findOptions);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }
  @Patch('/password/:id')
  updateUserPassword(
    @Param('id') id: number,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ): Promise<User> {
    return this.userService.updateUserPassword(id, updateUserPasswordDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): Promise<UpdateResult> {
    return this.userService.softDelete(id);
  }
}
