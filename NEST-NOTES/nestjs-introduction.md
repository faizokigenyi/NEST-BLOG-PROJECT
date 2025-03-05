# What is NestJS?

## 🚀 Introduction

NestJS is a **progressive Node.js framework** used for building efficient, scalable, and maintainable server-side applications. It is built on **TypeScript** (but also supports JavaScript) and uses **Express.js** (by default) or **Fastify** as the underlying HTTP server.

## 🔹 Key Features

- **Modular Architecture** – Encourages code reusability and maintainability.
- **TypeScript Support** – Fully supports TypeScript out of the box.
- **Dependency Injection** – Helps manage services and dependencies efficiently.
- **Built-in Middleware and Guards** – Provides security and request handling mechanisms.
- **REST and GraphQL Support** – Easily build APIs with decorators.
- **Microservices Compatibility** – Works with gRPC, Kafka, RabbitMQ, etc.
- **Scalability** – Designed for enterprise-grade applications.

## 📂 Folder Structure

A basic NestJS project follows this structure:

```
my-nest-app/
│── src/
│   ├── app.module.ts    # Root module
│   ├── app.controller.ts # Controller for handling requests
│   ├── app.service.ts    # Business logic service
│── test/                # Unit tests
│── main.ts              # Application entry point
│── package.json         # Dependencies
```

## ⚡ Getting Started

### 1️⃣ Install NestJS CLI

```sh
npm install -g @nestjs/cli
```

### 2️⃣ Create a New Project

```sh
nest new my-project
cd my-project
```

### 3️⃣ Run the Application

```sh
npm run start:dev
```

## 📡CREATING A NEW APPLICATION

## NestJS Module

In NestJS, a **module** is a fundamental building block that organizes the application structure. It provides a way to group related components such as services, controllers, and providers together.

### Key Elements of a Module

A module in NestJS is defined using the `@Module()` decorator, and it can include the following elements:

1. **Controllers**: Handle incoming requests and map them to appropriate service methods. Example of this is users.controller.ts
2. **Providers**: Classes that provide logic, often business logic or database interactions. Services are common providers. Example of this is users.service
3. **Imports**: Other modules that are imported and made available to this module.
4. **Exports**: Providers that should be available to other modules.
5. **Exports**: Make certain providers available to other modules that import this module.

### Example of a Simple Module

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Modules imported into this one
  controllers: [AppController], // Controllers in this module
  providers: [AppService], // Providers in this module
})
export class AppModule {}
```

### Example of a Simple Module

You can use the commandline to create a users module.

```
nest generate module users
```

## Basic `UsersModule` in NestJS

A basic `UsersModule` in NestJS typically handles user-related functionality such as registration, authentication, and data access. Below is a structure for a basic `UsersModule`.

### Structure

1. **Controller**: Handles incoming HTTP requests related to users.
2. **Service**: Contains the business logic for user-related operations.
3. **DTO (Data Transfer Object)**: Defines the shape of data sent between the client and the server.
4. **Entity**: Represents the data structure for storing user information (e.g., in a database).
5. **Module**: Ties everything together.

### Example Code for a Basic `UsersModule`

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

# CONTROLLERS IN NESTJS

In NestJS, a **controller** is a class that handles incoming HTTP requests and returns responses to the client. It acts as the entry point for all HTTP interactions, mapping specific endpoints to functions that process requests.

## Creating a Controller

Controllers in NestJS are decorated with the `@Controller()` decorator. The methods inside the controller are decorated with HTTP request decorators like `@Get()`, `@Post()`, `@Put()`, and `@Delete()` to map them to specific HTTP methods.

### Example:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'This will return all users';
  }
}
