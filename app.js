require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const { connectSocket } = require("./socket/index");

app.use(cors());
app.set("view engine", "ejs");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3000;

// Initialize socket connection
connectSocket(io);

// Serve the chat widget
app.get("/", (req, res) => {
  res.json({ name: "Support chat", description: "Chat" });
});

// Serve the chat widget
app.get("/widget", (req, res) => {
  res.render("widget", { name: req.query.name });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
