const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
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

// Find everything in database
app.get("/todos", (req, res) => {
  toDoList.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Post to database
app.post("/todos", (req, res) => {
  const newListItem = new toDoList({
    content: req.body.content,
  });
  newListItem.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Data was saved successfully.");
    }
  });
});

// Delete by ID from the database
app.delete("/:id", (req, res) => {
  toDoList.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Deleted successfully.");
    }
  });
});

// Start server on port 5000
app.listen(4000, () => {
  console.log("Server has started!");
});
