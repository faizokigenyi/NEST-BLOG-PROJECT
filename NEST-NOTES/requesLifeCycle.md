# NestJS Request Lifecycle with Filter Boundary

## Summary of Request Lifecycle with Filter Boundary

| Lifecycle Step       | Belongs to Filter Boundary? |
|----------------------|----------------------------|
| **Middleware**       | ❌ No (Outside)            |
| **Guards**          | ✅ Yes                     |
| **Interceptors**    | ✅ Yes                     |
| **Pipes**           | ✅ Yes                     |
| **Controller & Services** | ✅ Yes              |
| **Exception Filters** | ✅ Yes (Final layer)   |
| **Response Sent**   | ✅ Yes (Final stage)      |

## Key Takeaways
- **Middleware is outside the filter boundary** → Runs before NestJS security and transformation mechanisms.
- **Guards, Interceptors, Pipes, and Exception Filters are inside the filter boundary** → They control, modify, or validate requests before the final response.
- **Exception filters mark the last step inside the filter boundary** → They handle and format errors before responding to the client.

This structure ensures **security, validation, error handling, and transformation** before responses are sent, making NestJS a robust framework for backend development. 🚀


##Examples of middleware:
# Middleware Examples in NestJS

## 1. Logging Middleware
Logs the method and URL of every incoming request.

## 2. Authentication Middleware
Checks if the request contains a valid authorization token in the headers.

## 3. Body Parser Middleware
Ensures the request body is parsed as JSON.

## 4. Request Time Middleware
Adds a timestamp to the request object to track when the request was received.

## 5. CORS Middleware
Handles Cross-Origin Resource Sharing (CORS) headers.

## 6. IP Blocking Middleware
Blocks requests from specific IP addresses.

## 7. Custom Header Middleware
Adds a custom header to every response.

---

## Applying Middleware
- **Global Middleware**: Applies to all routes in the application.
- **Route-Specific Middleware**: Applies only to specific routes.

---

These examples showcase common use cases such as logging, authentication, body parsing, CORS handling, IP blocking, and response modifications. Middleware is essential for 
