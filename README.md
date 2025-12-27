# Express TypeScript Backend with Prisma & PostgreSQL

A modern backend API built with Express.js, TypeScript, Prisma ORM, and PostgreSQL. This project provides a robust foundation for building scalable REST APIs with type-safe database operations.

## 🚀 Features

- **TypeScript** - Full type safety throughout the application
- **Express.js** - Fast, minimalist web framework
- **Prisma ORM** - Type-safe database client with PostgreSQL
- **Bun Runtime** - Fast JavaScript runtime and package manager
- **Modular Architecture** - Organized service layer for maintainability
- **Database Models** - User, Product, and Order models with relationships

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (v1.0 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)
- [Node.js](https://nodejs.org/) (optional, if not using Bun)

## 🛠️ Tech Stack

- **Runtime**: Bun
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Environment**: dotenv

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "Prisma Postgres"
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
PORT=3000
```

4. Generate Prisma Client:

```bash
bunx prisma generate
```

5. Run database migrations:

```bash
bunx prisma migrate dev
```

## 🗄️ Database Schema

The project includes three main models:

### User

- `id` (UUID, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `password` (String)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- Relations: `products`, `orders`

### Product

- `id` (UUID, Primary Key)
- `name` (String)
- `price` (Float)
- `description` (String)
- `image` (String)
- `category` (String)
- `stock` (Int)
- `isActive` (Boolean)
- `userId` (String, Foreign Key)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- Relations: `user`, `orders`

### Order

- `id` (UUID, Primary Key)
- `userId` (String, Foreign Key)
- `productId` (String, Foreign Key)
- `quantity` (Int)
- `totalPrice` (Float)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)
- Relations: `user`, `product`

## 🚦 Running the Project

### Development Mode

Run the server in watch mode (auto-reloads on file changes):

```bash
bun run dev
```

### Production Mode

Build and run the production server:

```bash
bun run build
bun run start
```

### Type Checking

Check TypeScript types without running:

```bash
bun run type-check
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## 📡 API Endpoints

### Health Check

- **GET** `/health`
  - Returns server status and timestamp
  - Response: `{ status: "OK", timestamp: "..." }`

### Root

- **GET** `/`
  - Welcome message
  - Response: `{ message: "Hello from Express with TypeScript!" }`

### Users

- **POST** `/users`
  - Create a new user
  - Request Body:
    ```json
    {
    	"name": "John Doe",
    	"email": "john@example.com",
    	"password": "securepassword"
    }
    ```
  - Response: Created user object

## 📁 Project Structure

```
.
├── src/
│   ├── lib/
│   │   └── prisma.ts          # Prisma client configuration
│   ├── services/
│   │   └── users.ts           # User service functions
│   └── server.ts              # Express server setup
├── prisma/
│   ├── migrations/            # Database migrations
│   └── schema.prisma          # Prisma schema definition
├── generated/
│   └── prisma/                # Generated Prisma client
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Available Scripts

- `bun run dev` - Start development server with watch mode
- `bun run start` - Start production server
- `bun run build` - Build the project for production
- `bun run type-check` - Run TypeScript type checking

## 🗃️ Database Commands

- `bunx prisma generate` - Generate Prisma Client
- `bunx prisma migrate dev` - Create and apply migrations
- `bunx prisma migrate deploy` - Apply migrations in production
- `bunx prisma studio` - Open Prisma Studio (database GUI)
- `bunx prisma db push` - Push schema changes without migrations

## 🔐 Environment Variables

| Variable       | Description                  | Required           |
| -------------- | ---------------------------- | ------------------ |
| `DATABASE_URL` | PostgreSQL connection string | Yes                |
| `PORT`         | Server port number           | No (default: 3000) |

## 📝 Development Notes

- The Prisma client is generated to `generated/prisma` directory
- All database operations use the Prisma client from `src/lib/prisma.ts`
- Services are organized in the `src/services/` directory
- TypeScript strict mode is enabled for better type safety

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run type checking: `bun run type-check`
4. Test your changes
5. Submit a pull request

## 📄 License

ISC
