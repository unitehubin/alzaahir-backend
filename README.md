
# Project Name

ALZAAHIR-BACKEND

## Getting Started

Follow these steps to set up and run the project in your local environment.

### Prerequisites

Make sure you have the following installed:
- Node.js
- Yarn
- Prisma CLI (if required)
- Mongodb

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Generate the Prisma Client:
   ```bash
   ./scripts/prishma.sh
   ```

4. Start the application in development mode:
   ```bash
   yarn start:dev
   ```

---

## Scripts Summary

| Task                      | Command                 |
|---------------------------|-------------------------|
| Install packages          | `yarn`                 |
| Generate Prisma client    | `./scripts/prishma.sh` |
| Start development server  | `yarn start:dev`       |

---

## Notes

- Ensure your database is configured correctly in the `prisma` schema file before running the Prisma generation script.
- Update `.env` with the required environment variables.

---

## License

This project is licensed under the [MIT License](./LICENSE).

Happy coding! 🚀
