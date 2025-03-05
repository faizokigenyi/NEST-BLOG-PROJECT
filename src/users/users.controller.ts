import { Controller, Get, Param } from '@nestjs/common';
/**
 * Thisis the controller for the users
 */
@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param('id')
    id: string,
  ) {
    return id;
  }
}
