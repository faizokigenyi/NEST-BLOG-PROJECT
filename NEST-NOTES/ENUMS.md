# Why Are Enums Called Enums in TypeScript?

In TypeScript, the term **"enum"** is short for **"enumeration"**, which means a distinct set of named values. The name comes from the concept of **enumerated types** in programming, where a variable can only take one of a predefined set of values.

## Why "enum"?

1. **Enumeration = Listing Out Values**  
   The word "enumeration" means **listing out** things one by one. In programming, an `enum` is a way to define a collection of related values with meaningful names.

2. **Inspired by Other Languages**  
   Many programming languages, like C, C++, and Java, have **enumerations (enums)** to represent a set of predefined constants. TypeScript follows this convention.

3. **Better Readability and Maintainability**  
   Instead of using arbitrary numbers or strings, `enum` allows developers to use meaningful names:
   ```ts
   enum Status {
     Pending,
     InProgress,
     Completed
   }

## Type Safety
Enums help prevent invalid values from being used. For example, without an enum, you might accidentally pass a string that doesn't match any expected value.