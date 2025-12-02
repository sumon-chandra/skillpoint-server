# SkillPoint Server

A RESTful backend API for SkillPoint — a learning platform for creating and delivering courses, managing users, enrollments and content. Built with Node.js and Express, with MongoDB for data storage and JWT for authentication.

## Features

- User authentication (register, login, role-based access)
- Course, lesson and category management
- Enrollment and progress tracking
- Reviews and ratings
- Admin endpoints for moderation and management
- Input validation, error handling and request logging
- Optional file/media upload support (Cloudinary or local storage)

## Tech stack

- Node.js + Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for auth
- dotenv for configuration
- (Optional) Cloudinary for media
- (Optional) Jest / Supertest for tests

## Getting started

1. Clone the repo

   ```
   git clone <repository-url>
   cd SkillPoint-Server
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Create a .env file (see example below) and fill in values

4. Run the server (development)
   ```
   npm run dev
   ```
   Production:
   ```
   npm start
   ```

## Example .env

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/skillpoint
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Available scripts

- `npm run dev` — start in development (nodemon)
- `npm start` — start production server
- `npm test` — run test suite
- `npm run lint` — lint code (if configured)

## Main API endpoints (examples)

- Auth
  - POST /api/auth/register
  - POST /api/auth/login
- Users
  - GET /api/users/:id
  - PATCH /api/users/:id
- Courses
  - GET /api/courses
  - POST /api/courses
  - GET /api/courses/:id
  - PATCH /api/courses/:id
  - DELETE /api/courses/:id
- Lessons
  - POST /api/courses/:courseId/lessons
  - PATCH /api/lessons/:id
- Enrollments
  - POST /api/courses/:id/enroll
  - GET /api/users/:id/enrollments
- Reviews
  - POST /api/courses/:id/reviews

Document full API details using Postman collection or Swagger/OpenAPI for consumers.

## Database & Seeding

- Uses MongoDB via Mongoose.
- Provide seed scripts to populate demo users, courses and content (optional).
  ```
  node scripts/seed.js
  ```

## Testing

- Write unit and integration tests with Jest + Supertest.
- Run tests:
  ```
  npm test
  ```

## Deployment

- Build and run on Node.js hosting (Heroku, Render, DigitalOcean, etc.).
- Ensure environment variables and MongoDB connection are configured.
- Use process manager (PM2) for production or containerize with Docker.

## Contributing

- Fork the repository, create a feature branch, open a PR with a clear description.
- Follow existing coding style and add tests for new logic.

## License

Specify a license (e.g., MIT) in LICENSE file.

## Contact

For questions or issues, open an issue in the repository.
