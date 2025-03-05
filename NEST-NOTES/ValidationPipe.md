In NestJS, the `ValidationPipe` is a built-in pipe that automatically validates incoming data, typically request payloads (like body, query, and params), based on the validation rules defined using decorators from the `class-validator` library.

When you apply the `ValidationPipe`, it checks the input data for validity before passing it to the route handler. If the data is invalid (e.g., missing required fields, incorrect formats), it will throw a `BadRequestException` by default.

### Example Usage:

1. **Install `class-validator` and `class-transformer`:**
   ```bash
   npm install class-validator class-transformer
import { IsString, IsInt, Min } from 'class-validator';

```typescript
Define a DTO (Data Transfer Object) with validation rules:

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  age: number;
}

Use ValidationPipe in a controller or globally:
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'User created';
  }
}

Globally (recommended for consistency): In main.ts, apply it globally so all requests are validated automatically.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

