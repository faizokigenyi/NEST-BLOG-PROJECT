# Mapped Types in NestJS

## What Are Mapped Types?  
Mapped types in NestJS are utility types that help in transforming existing TypeScript types or interfaces into new types with modified properties. They are primarily used to **create variations** of a base type, such as making all properties optional, required, or read-only.  

NestJS provides built-in mapped types that make it easier to manipulate DTOs (Data Transfer Objects) without manually defining each variation.

---

## **Built-in Mapped Types in NestJS**
NestJS offers several mapped types through the `@nestjs/mapped-types` package:

### 1. **`PartialType<T>`**  
Makes all properties of `T` optional.  
Useful for update DTOs where only some fields may be provided.

```ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
