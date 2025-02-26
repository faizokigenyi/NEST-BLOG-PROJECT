import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param-dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    //  injecting the user repository
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    // injecting the Auth service
    // @Inject(forwardRef(() => AuthService))
    // private readonly authService: AuthService,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // check if user exists in db
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    // Handle exception
    // create  a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }

  public findOne(id: string) {
    return { id: 124, firstName: 'John', email: 'john@doe.com' };
  }
}
