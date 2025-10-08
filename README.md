# Support Chat Express Socket Boilerplate

A real-time support chat application built with Express.js and Socket.IO. This boilerplate provides a complete foundation for building scalable chat applications with user authentication, real-time messaging, and a clean modular architecture.

## 🚀 Features

- **Real-time messaging** with Socket.IO
- **User authentication** with JWT
- **RESTful API** with Express.js
- **MongoDB** integration with Mongoose
- **Modular domain-driven architecture**
- **Request validation** with Joi
- **Comprehensive error handling**
- **Logging** with Winston
- **API documentation** with Swagger
- **Unit testing** with Jest
- **Docker support** for MongoDB
- **Chat widget** for easy integration

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Real-time**: Socket.IO
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Validation**: Joi
- **Testing**: Jest, Supertest
- **Documentation**: Swagger/OpenAPI
- **Logging**: Winston
- **Development**: Nodemon

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OwaliShawon/support-chat-express-socket-boilerplate.git
   cd support-chat-express-socket-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://root:example@localhost:27017/support-chat?authSource=admin
   JWT_SECRET=your-jwt-secret-key
   ```

4. **Start MongoDB with Docker**
   ```bash
   cd docker/mongo-db
   docker-compose up -d
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app.js                 # Express app configuration
├── server.js             # Server setup with Socket.IO
├── routes.js             # Main route definitions
├── start.js              # Application entry point
├── configs/              # Configuration files
├── domains/              # Domain-driven modules
│   ├── auth/            # Authentication domain
│   ├── chat/            # Chat functionality
│   └── users/           # User management
├── libraries/           # Shared libraries
│   ├── db/             # Database connection
│   ├── error-handling/ # Error handling utilities
│   ├── log/            # Logging configuration
│   └── utils/          # Utility functions
├── middlewares/         # Express middlewares
├── socket/             # Socket.IO event handlers
│   ├── events/         # Socket event handlers
│   └── validators/     # Socket data validation
└── views/              # EJS templates
```

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration

### Users
- `GET /api/v1/users` - Get all users (admin only)
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Health Check
- `GET /health` - Application health status

### Widget
- `GET /widget?name=YourName` - Chat widget interface

## 🔄 Socket.IO Events

### Client to Server
- `join_room` - Join a chat room
- `leave_room` - Leave a chat room
- `send_message` - Send a message
- `typing` - Typing indicator

### Server to Client
- `receive_message` - Receive a new message
- `user_joined` - User joined notification
- `user_left` - User left notification
- `typing` - Typing indicator broadcast
- `validation_error` - Data validation errors

## 🧪 Testing

Run the test suite:
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📚 API Documentation

The API is documented using Swagger. Once the server is running, visit:
- Swagger UI: `http://localhost:3000/api-docs` (if configured)
- OpenAPI spec: Check `swagger.yaml` in the root directory

## 🐳 Docker Support

Start MongoDB and Mongo Express with Docker:
```bash
cd docker/mongo-db
docker-compose up -d
```

This will start:
- MongoDB on port `27017`
- Mongo Express (web UI) on port `8081`

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Create a new domain module
npm run create-domain

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🏛️ Architecture

This boilerplate follows a **domain-driven design** pattern:

- **Domains**: Self-contained modules (auth, chat, users)
- **Libraries**: Shared utilities and configurations
- **Middlewares**: Request processing layers
- **Socket**: Real-time communication handlers

Each domain contains:
- `api.js` - Controller logic
- `service.js` - Business logic
- `routes.js` - Route definitions
- `dto.js` - Data transfer objects
- `schema.js` - Database schemas (if applicable)

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Request validation with Joi
- Helmet.js for security headers
- CORS configuration
- Input sanitization

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | - |
| `JWT_SECRET` | JWT signing secret | - |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

## 🚀 Getting Started Quickly

For a quick start with the chat widget:

1. Start the server: `npm run dev`
2. Visit: `http://localhost:3000/widget?name=YourName`
3. Open multiple tabs to test real-time messaging

---

**Happy Coding!** 🎉
