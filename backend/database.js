const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/toDoDB");
mongoose.pluralize(null);

const toDoListSchema = new mongoose.Schema({
  content: String,
});

const toDoList = mongoose.model("toDoList", toDoListSchema);

const newItem = new toDoList({
  content: "Hello!",
});

newItem.save();
