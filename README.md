# ALZAAHIR-BACKEND

A NestJS-based backend service with MongoDB and Prisma integration.

## Overview

This is a backend service built using NestJS framework, providing a robust infrastructure with MongoDB database integration through Prisma ORM.

## Tech Stack

- **Framework**: NestJS
- **Runtime**: Node.js
- **Database**: MongoDB (via Prisma)
- **Package Manager**: Yarn

## Prerequisites

- Node.js
- Yarn
- MongoDB
- Prisma CLI

## Development Setup

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd alzaahir-backend
   yarn install
   ```

2. **Environment Setup**
   - Create `.env` file in the root directory
   - Required variables:
     - DATABASE_URL
     - Other environment-specific variables

3. **Database Setup**

   ```bash
   # For Windows
   yarn prisma:win
   # OR scripts/prisma.bat

   # For Linux/Unix
   yarn prisma:linux
   # OR ./scripts/prisma.sh
   ```

## Available Scripts

### Development

- `yarn start:dev`: Runs in development mode with hot-reload
- `yarn build`: Compiles TypeScript to JavaScript

### Database

- `prisma:win`: Windows script for Prisma operations
- `prisma:linux`: Linux script for Prisma operations
  - Generates Prisma client
  - Applies database migrations

## Project Structure

```
alzaahir-backend/
├── src/
│   ├── app.module.ts              # Main application module
│   └── prisma/                    # Database
│       └── schema.prisma          # Prisma schema
│
├── scripts/                       # Utility Scripts
│   ├── prisma.sh                 # Unix Prisma script
│   └── prisma.bat                # Windows Prisma script
│
└── test/                         # Test Files
```

### Core Components

1. **App Module**
   - Root module of the application
   - Configures core NestJS setup
   - Manages dependency injection

2. **Database Layer**
   - Prisma ORM integration
   - Database schema definition
   - Migration management

### Database Structure

The application uses MongoDB through Prisma:

- Provides type-safe database access
- Handles database migrations
- Manages database schema

### Error Handling

- Global exception filters
- Structured error responses
- Basic error logging

## Authentication API Documentation

### Endpoints

#### 1. Email Login

```http
POST /auth/login
```

**Request Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "Logged in successfully"
}
```

* Sets HTTP-only cookie `auth_token`

#### 2. Google OAuth

```http
GET /auth/google
```

* Redirects to Google login

```http
GET /auth/google/callback
```

* Handles Google OAuth callback
- Sets HTTP-only cookie `auth_token`

#### 3. Logout

```http
POST /auth/logout
```

**Response:**

```json
{
  "message": "Logged out successfully"
}
```

* Clears `auth_token` cookie

### Authentication Flow

#### JWT Cookie Authentication

- Tokens are stored in HTTP-only cookies
- Cookie name: `auth_token`
- Expiration: 1 hour
- Security features:
  - HTTP-only: Yes
  - Secure: Yes (in production)
  - SameSite: Lax

## Architecture Documentation

### Authentication Module

```
src/modules/auth/
├── auth.module.ts           # Module configuration
├── auth.controller.ts       # Route handlers
├── auth.service.ts         # Business logic
└── strategies/            # Passport strategies
    ├── jwt.strategy.ts    # JWT authentication
    └── google.strategy.ts # Google OAuth
```

#### Components

1. **AuthModule**
   - Configures JWT and Passport
   - Imports PrismaModule for database access
   - Registers strategies and services

2. **AuthService**
   - Handles user validation
   - Manages JWT token generation
   - Implements login/OAuth logic

3. **AuthController**
   - Exposes authentication endpoints
   - Manages cookie-based responses
   - Implements OAuth callbacks

4. **Strategies**
   - JWT: Extracts token from cookies
   - Google: Handles OAuth2 authentication

#### Security Features

1. **Token Storage**
   - HTTP-only cookies prevent XSS attacks
   - Secure flag in production
   - SameSite policy for CSRF protection

2. **OAuth Integration**
   - Google OAuth2 implementation
   - Secure profile information handling
   - Automatic user creation/linking

3. **Password Security**
   - Hashed password storage
   - Secure password comparison
   - No plain-text password transmission

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---

**Note**: This documentation reflects the current state of the codebase. As new modules and features are added, this documentation should be updated accordingly.
