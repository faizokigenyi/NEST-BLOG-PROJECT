import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    //   injecting the users service
    private readonly usersService: UsersService,
  ) {}

  public findAll(userId: string) {
    // find user
    const user = this.usersService.findOne(userId);
    return [
      { user: user, title: 'Test title', Content: 'Test Content' },
      { user: user, title: 'Test title 2', Content: 'Test Content 2' },
    ];
  }
}
