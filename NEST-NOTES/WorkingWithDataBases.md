## HOW DOES A SERVICE INTERACT WITH A DATABASE

The service/ provider doesnot retrieve data directly from the database. There is a layer which produces queries which are used to interact with the database. This layer is called ORM. It acts as a bridge between the providers and the db. ORM is a layer.
There are two different types of databases in link with nestjs.

# Supported ORM:

TypeORM, Prisma, Mikrorm, Sequelize, Mongoose

# Databases compatible with TypeORM:

MySQL, PostgresSQL, COCKROACHdb, msSQLserver, GoogleCloudSpanner

# Object-Relational Mapping (ORM) with `usersService` and a Database

Object-Relational Mapping (ORM) is a technique that allows you to interact with a relational database using objects in your programming language instead of writing raw SQL queries. It simplifies database operations by abstracting them into models and methods.

---

# ORM ADVANTAGES

SQL QUERY: SELECT \* FROM USERS WHERE id= 32
TYPEORM: userRepository.findOne(id)
Easyto swich dbs

Disdvantages:
No control over complicated queries

# CONNECTING NESTJS TO DATABAASE:

You will need 3 packages:
1.TypeORM
2.NESTJS/TYPEORM
3.Drivers for the SQL database.

## INSTALLATION

npm i typeorm @nestjs/typeorm pg

## INTEGRATING WITH NESTJS

The database can be connected to our app by using the app modules

```typescript
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
/**
 * Importing Entities
 * */
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    ***TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        // entities: [User],
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: '1234',
        host: 'localhost',
        autoLoadEntities: true,
        database: 'nestjs-blog',
      }),
    })*,
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


```

[VISIT FOR MORE INFORMATION ON TYPEORM INTEGRATION](https://www.udemy.com/course/nestjs-masterclass-complete-course/learn/lecture/44530355#content)
[Visit Google](https://www.google.com)

[VISIT-TYPEORMDATASOURCE-OPTIONS](https://typeorm.io/data-source-options#postgres--cockroachdb-data-source-options)

## 1. Define the User Entity (Database Model)

In ORM, an entity represents a table in the database.

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
```

```typescript
@Entity() maps the class to a database table.
@PrimaryGeneratedColumn() is an auto-incrementing primary key.
@Column() defines database columns.
```

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string, password: string): Promise<User> {
    const user = this.userRepository.create({ name, email, password });
    return this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}


this.userRepository.create({...}) creates a new user object.
this.userRepository.save(user) persists it in the database.
this.userRepository.find() retrieves all users.
this.userRepository.findOne({ where: { id } }) fetches a user by ID.

```

## Using usersService in a Controller

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = this.userRepository.create({ name, email, password });
    return this.userRepository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}
```

### ENTITIES

## User entity

When we use user.entity.ts, we are talking about the user table. Its a file that contains the definition of the columns that are available in one specicic users table in the database.It's not named as users.entity.ts but rather user.entity.ts. usersRepository.ts is not a file but something that is injected into the users service file. Once connected,it can now interact with the database.

```javascript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users') // Specifies the table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

```
