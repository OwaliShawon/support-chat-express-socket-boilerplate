require("dotenv").config();
const app = require("./app"); // Adjusted path
const http = require("http");
const { Server } = require("socket.io");
const { connectSocket } = require("./socket");
const { connectWithMongoDb } = require("./libraries/db");

const server = http.createServer(app);
const io = new Server(server);

// Attach Socket.io to the server
connectSocket(io);

connectWithMongoDb();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
