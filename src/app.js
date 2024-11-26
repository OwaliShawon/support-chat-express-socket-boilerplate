const express = require("express");
const path = require("path");
// const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use("/css", express.static(path.join(__dirname, "../public/css")));
app.use("/js", express.static(path.join(__dirname, "../public/js")));

// Routes
// app.use('/chat', chatRoutes);

app.get("/widget", (req, res) => {
  res.render("widget", { name: req.query.name });
});

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

module.exports = app;
