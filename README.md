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
