import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query, UseGuards,
  Request
} from "@nestjs/common";
import { UpdateResult } from 'typeorm';
import { UpdateUserDto, UpdateUserDtoAll } from "./dto/update-user.dto";
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/one')
  getUser(  @Request()req, @Param('id') id: number): Promise<User> {
    return this.userService.getOneUser(req.user.authId);
  }

  @Get()
  getUsers(@Query() findOptions: FindUserDto) {
    return this.userService.getAllUsersSortedAndPaginated(findOptions);
  }

  @Patch('/:id?')
  @UseGuards(JwtAuthGuard)
  updateUser(
    @Request() req,
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDtoAll,
  ): Promise<User> {
    return this.userService.updateUser(req.user.authId, updateUserDto);
   // return this.userService.updateUser(id, updateUserDto);
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
