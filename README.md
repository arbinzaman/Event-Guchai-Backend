
# Eventগুছাই Backend

Eventগুছাই Backend is the server-side component of the multivendor event management system built with Node.js and MySQL. It handles authentication, database operations, and API endpoints for managing users, vendors, and events.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Authentication using Firebase Authentication.
- CRUD operations for users, vendors, and events.
- Role-based access control (RBAC) for managing permissions.
- Secure JWT token generation and validation.
- Data validation and error handling.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **ORM:** Sequelize
- **Authentication:** Firebase Authentication
- **Authorization:** JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js installed on your machine
- MySQL server running locally or remotely
- Firebase project set up for authentication

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/EventGuchai-backend.git
   cd EventGuchai-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

## Configuration

- The `config` directory contains configuration files for different environments (development, production).
- Update the configuration files (`config.json`, `config.prod.json`) as needed for your environment.

## Database Setup

- The database schema and migrations are managed using Sequelize.
- Run migrations to create the necessary tables:

  ```bash
  npx sequelize-cli db:migrate
  ```

- For production environments, ensure that the database connection details are correctly configured in `config.prod.json`.

## API Endpoints

- Detailed API documentation can be found in the API documentation file or by accessing the Swagger UI at `/api-docs` endpoint when the server is running.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.
