# DTOs in NestJS

In NestJS, **DTOs** (Data Transfer Objects) are used to define the shape of data that is transferred between different layers of the application. DTOs are typically used to structure incoming requests, outgoing responses, and to ensure that data meets specific requirements before it is processed or sent.

## Key Features of DTOs:
1. **Data Validation**: DTOs help ensure that the data being transferred conforms to a certain structure and meets validation rules (such as required fields, types, or formats).

2. **Separation of Concerns**: DTOs act as an intermediary between the client and the service layer, providing a clear contract for how data should be structured.

3. **Type Safety**: By using DTOs, you ensure that only the correct types of data are passed between layers of your application, which improves the maintainability and readability of your code.

4. **Custom Transformations**: DTOs can include transformation logic (using pipes or decorators) to ensure that data is properly formatted before being passed into the system.

5. **Scalability**: DTOs make it easier to manage large applications by ensuring that changes in the data structure are reflected consistently across the application.

## Common Use Cases for DTOs:
- **Request Validation**: Ensuring the correct data structure when a request is made to the server (e.g., ensuring a user’s registration data is properly formatted).
- **Response Formatting**: Structuring the response data before sending it back to the client.
- **Data Transformation**: Converting or sanitizing incoming data before passing it to services or database layers.

## How to Create DTOs:
1. **Define the Structure**: DTOs are usually classes that define the shape of the data (often with decorators for validation and transformation).

2. **Use Validation Decorators**: You can use validation decorators like `@IsString()`, `@IsInt()`, `@IsEmail()`, etc., from the `class-validator` library to enforce validation rules on the DTO properties.

3. **Use Transformation Decorators**: You can also use transformation decorators like `@Transform()` or `@Type()` to convert or format data when it is passed to the DTO.

## Example:


```typescript
In the example below,using the ParseIntPipe will cause clatterin our code. 
  @Get('/{:id}')
  public getUsersById(
    @Param('id', ParseIntPipe)
    id: string,
    // If we are to add more validation pipes,the code will be full of clatter, itis better to use DTOs to make our code readable
    @Query('limit', new DefaultValuePipe(10) ,ParseIntPipe) limit: number ,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page);
    return id;
  }
  ```



### THIS IS THE BETTER APPROACH
Add a well defined Dto and import it to make everything declattered. 
```typescript
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
```
Since we are using classes to make our Dtos, we use a special package called class-validator to validate our Dtos.

# class-validator and its Relation to Pipes in NestJS

**`class-validator`** is a library used in NestJS (and other TypeScript-based applications) to perform validation on class properties. It provides decorators that can be applied to class properties to enforce rules for data validation. This allows developers to ensure that incoming data adheres to specific formats, constraints, or rules before further processing.

### Key Features of `class-validator`:
1. **Declarative Validation**: Using decorators like `@IsString()`, `@IsEmail()`, `@IsInt()`, etc., you can easily enforce validation rules on class properties.
   
2. **Custom Validation Rules**: You can define custom validation logic using the `@Validate()` decorator, or create custom validation classes for more complex scenarios.

3. **Integration with Pipes**: `class-validator` works seamlessly with NestJS Pipes, especially the `ValidationPipe`, to automatically validate incoming data in requests.

4. **Error Handling**: If validation fails, `class-validator` throws a detailed error with information about which validation rules failed, which can then be handled appropriately in the application.

5. **Transformations**: `class-validator` allows you to use transformation decorators (like `@Transform()`) in combination with `class-transformer` to automatically convert values to the desired type during validation.

### Common Validators:
- `@IsString()`: Ensures the property is a string.
- `@IsInt()`: Ensures the property is an integer.
- `@IsEmail()`: Validates that the property is a valid email address.
- `@IsNotEmpty()`: Ensures that the property is not empty.
- `@Min()`, `@Max()`: Enforces numeric range constraints.

### Example of Using `class-validator`:

```typescript
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
```

# class-validator in NestJS

**`class-validator`** is a library used in NestJS for declarative validation of data. It allows you to define validation rules directly on the properties of a class using decorators. This is commonly used to validate incoming data in request bodies, query parameters, and route parameters within NestJS applications. The library is often used in conjunction with the `ValidationPipe` to automate validation and error handling.

By using `class-validator`, you can ensure that incoming data meets specific criteria before it is processed by your application, reducing the risk of invalid data affecting your business logic.

## How it Works in NestJS:
- **DTOs (Data Transfer Objects)**: `class-validator` is typically used with DTOs to validate the data structure for requests.
- **ValidationPipe**: The `ValidationPipe` in NestJS works with `class-validator` to automatically validate the data. When applied to a route handler or globally, it checks the incoming data against the validation rules in the DTO and throws an error if the validation fails.

## Common Decorators in `class-validator`:

Here are some of the most commonly used validation decorators from `class-validator`:

1. **@IsString()**
   - Ensures that the property is a string.
   ```typescript
   @IsString()
   name: string;

# List of Common Decorators in `class-validator` for NestJS

Here is a list of the most commonly used decorators from the `class-validator` library in NestJS:

1. **@IsString()**  
   Ensures that the property is a string.

2. **@IsInt()**  
   Ensures that the property is an integer.

3. **@IsEmail()**  
   Ensures that the property is a valid email address.

4. **@IsNotEmpty()**  
   Ensures that the property is not empty or undefined.

5. **@IsOptional()**  
   Makes a property optional for validation. The property will not be validated if it is not provided.

6. **@Min()**  
   Ensures that the property is greater than or equal to the specified minimum value.

7. **@Max()**  
   Ensures that the property is less than or equal to the specified maximum value.

8. **@IsDate()**  
   Ensures that the property is a valid date.

9. **@Length()**  
   Ensures that the length of the string is within a given range.

10. **@IsIn()**  
    Ensures that the property is within a given array of values.

11. **@Matches()**  
    Ensures that the property matches a regular expression pattern.

12. **@IsPhoneNumber()**  
    Ensures that the property is a valid phone number.

13. **@IsUUID()**  
    Ensures that the property is a valid UUID (Universally Unique Identifier).

14. **@ArrayNotEmpty()**  
    Ensures that the array is not empty.

15. **@IsUrl()**  
    Ensures that the property is a valid URL.

16. **@IsEnum()**  
    Ensures that the property is a valid value from a given enum.

17. **@IsDefined()**  
    Ensures that the property is defined (not `undefined`).

18. **@IsAlpha()**  
    Ensures that the property contains only alphabetic characters (a-zA-Z).

19. **@IsAlphanumeric()**  
    Ensures that the property contains only alphanumeric characters (a-zA-Z0-9).

20. **@IsLowercase()**  
    Ensures that the property is in lowercase.

21. **@IsUppercase()**  
    Ensures that the property is in uppercase.

22. **@IsPositive()**  
    Ensures that the property is a positive number.

23. **@IsNegative()**  
    Ensures that the property is a negative number.

24. **@IsCreditCard()**  
    Ensures that the property is a valid credit card number.

25. **@IsUrl()**  
    Ensures that the property is a valid URL.

26. **@IsFQDN()**  
    Ensures that the property is a valid Fully Qualified Domain Name (FQDN).

27. **@IsISO8601()**  
    Ensures that the property is a valid ISO 8601 date string.

28. **@IsMongoId()**  
    Ensures that the property is a valid MongoDB ObjectId.

29. **@IsNumber()**  
    Ensures that the property is


Instead of adding new ValidationPipe to each of our requests, wecan go on and add ValidationPipe globally
by adding it to the main application

```typescript
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  ```





