import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // injecting the users service
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}



  public isAuth() {
    return true;
  }
}
