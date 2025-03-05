# Pipes in NestJS

In NestJS, **Pipes** are a powerful feature used to transform or validate incoming data in the request lifecycle. They sit between the incoming request and the controller's route handler. Pipes can be used to perform various tasks like data transformation, input validation, sanitization, and even error handling. They are applied to route handlers, parameters, or even globally to all routes.

## Key Features of Pipes:
1. **Transformation**: Pipes can be used to convert input data into a specific type or format. For example, converting a string to a number or a date.
   
2. **Validation**: Pipes can validate incoming data to ensure it meets certain criteria. For instance, checking if a string is a valid email address or if a number falls within a certain range.

3. **Sanitization**: Pipes can clean or sanitize input data before it reaches the handler, ensuring the data adheres to a required format.

4. **Global Scope**: Pipes can be applied globally to all routes in an application, ensuring consistency across the entire application.

5. **Custom Pipes**: Developers can create their own custom pipes for specific use cases, providing flexibility in data processing.

## Common Use Cases:
- **Validation**: Ensuring that user input meets certain criteria (e.g., `@IsString()`, `@IsInt()` decorators from class-validator).
- **Transformation**: Converting raw input data into more suitable types, like converting strings to numbers or arrays to objects.
- **Sanitization**: Removing unwanted characters or formatting input for consistency.

## How to Use Pipes:
1. **Built-in Pipes**: NestJS provides built-in pipes such as `ValidationPipe` for validating data and `ParseIntPipe` for transforming strings into integers.
2. **Custom Pipes**: You can create a custom pipe by implementing the `PipeTransform` interface, which requires defining a `transform()` method.

## Example:
You can apply a pipe to a route handler parameter like this:

```typescript
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return this.someService.findOne(id);
}

In NestJS, you cannot use pipes to validate an optional parameter. This will throw an error. You can introduce Dtos to walk around this.
