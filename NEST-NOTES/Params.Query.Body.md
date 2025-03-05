# Params, Query, and Body in NestJS

## Params
Params (route parameters) are used to capture values from the URL path.

### Example:
```typescript
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `User ID: ${id}`;
  }
}
```

**Example Request:**
```
GET /users/123
```
**Response:**
```
User ID: 123
```

## Query
Query parameters are used to pass data in the URL after the `?` symbol.

### Example:
```typescript
import { Controller, Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUserByQuery(@Query('name') name: string) {
    return `User Name: ${name}`;
  }
}
```

**Example Request:**
```
GET /users?name=John
```
**Response:**
```
User Name: John
```

## Body
The request body is used to send data in the request payload, usually in POST or PUT requests.

### Example:
```typescript
import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: { name: string; age: number }) {
    return `User Created: ${createUserDto.name}, Age: ${createUserDto.age}`;
  }
}
```

**Example Request:**
```
POST /users
Content-Type: application/json

{
  "name": "Alice",
  "age": 25
}
```
**Response:**
```
User Created: Alice, Age: 25
```

These decorators (`@Param()`, `@Query()`, and `@Body()`) allow you to easily extract data from different parts of the HTTP request in NestJS.
