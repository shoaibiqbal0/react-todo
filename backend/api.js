const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to mongoose database
mongoose.connect("mongodb://localhost:27017/toDoDB");
mongoose.pluralize(null);

// Create new schema
const toDoListSchema = new mongoose.Schema({
  content: String,
});

// Create new model
const toDoList = mongoose.model("toDoList", toDoListSchema);

// Get the homepage
app.get("/", (req, res) => {
  console.log("It's working!");
});

// Start server on port 5000
app.listen(5000, () => {
  console.log("Server has started!");
});
