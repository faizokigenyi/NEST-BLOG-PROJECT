import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  Query,
  Param,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  ParseFloatPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { create } from 'domain';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { GetUsersParamDto } from './dtos/get-users-param-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id') // Correct usage of optional parameter
  public getUsers(
    @Param('id', ParseIntPipe)
    getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1)) page: number,
  ) {
    return this.usersService.findAll(GetUsersParamDto, limit, page);
  }
  @Post()
  public createUsers(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return patchUserDto;
  }
}
