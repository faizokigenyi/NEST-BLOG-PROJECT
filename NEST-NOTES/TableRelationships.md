### One-to-One Relationship: User and UserProfile

A one-to-one relationship means that each record in one table corresponds to exactly one record in another table. In this case, a `User` has one `UserProfile`, and each `UserProfile` belongs to exactly one `User`.

#### Database Schema Representation

```sql
CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE UserProfile (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    bio TEXT,
    avatar_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);


+---------+      1 to 1      +--------------+
|  User   |---------------->| UserProfile  |
+---------+                 +--------------+
| id (PK) |                 | id (PK)      |
| name    |                 | user_id (FK) |
| email   |                 | bio          |
+---------+                 | avatar_url   |
                             +--------------+
```

## Explanation 
### One-to-One Relationship: User and UserProfile

A one-to-one relationship means each record in one table is linked to exactly one record in another table.

#### Explanation:
- **User Table**:  
  - Stores basic user information (`id`, `name`, `email`).  
- **UserProfile Table**:  
  - Stores additional user details (`bio`, `avatar_url`).  
  - Has a `user_id` column that uniquely references a `User`.  
- **One-to-One Mapping**:  
  - The `user_id` column in `UserProfile` is both a **foreign key** and **unique** to ensure each user has only one profile.  
- **Foreign Key Constraint**:  
  - `user_id` in `UserProfile` references `id` in `User`, establishing the relationship.  
- **Cascade Delete**:  
  - If a `User` is deleted, the corresponding `UserProfile` is also removed (`ON DELETE CASCADE`).  

This setup ensures that each user has at most one profile, enforcing a strict one-to-one relationship.


## EXAMPLE 
| Title      | PostType | Slug      | Status  | Content | Schema | FeaturedImageUrl | PublishedOn | MetaOptionsId |
|-----------|---------|----------|--------|---------|--------|-----------------|------------|--------------|
| Sample Post | Blog    | sample-post | Draft   | Lorem ipsum... | {}     | image.jpg       | 2025-03-07 | 1            |

