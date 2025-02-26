import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class PatchUserDto extends PartialType(CreateUserDto) {
  @IsInt()
  @Type(() => Number)
  age: number;
}
