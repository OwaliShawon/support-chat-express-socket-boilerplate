const express = require("express");
const { createChatRequest } = require("./service");
const chatRouter = express.Router();

chatRouter.post("/chat", createChatRequest);

module.exports = chatRouter;
