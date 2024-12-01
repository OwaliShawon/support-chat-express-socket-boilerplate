const express = require("express");
const compression = require("compression");
const path = require("path");
const chatRouter = require("./domains/chats/routes");

const app = express();

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/css", express.static(path.join(__dirname, "../public/css")));
app.use("/js", express.static(path.join(__dirname, "../public/js")));

// Routes
app.use("/api/v1", chatRouter);

app.get("/widget", (req, res) => {
  res.render("widget", { name: req.query.name });
});

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

module.exports = app;
