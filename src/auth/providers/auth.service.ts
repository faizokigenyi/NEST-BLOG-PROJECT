import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // injecting the users service
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    // check if user exists in db
    // login
    // token

    const user = this.usersService.findOne('1234');
    return 'SAMPLE TOKEN';
  }

  public isAuth() {
    return true;
  }
}
