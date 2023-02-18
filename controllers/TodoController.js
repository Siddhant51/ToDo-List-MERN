const ToDoModel = require("../models/ToDoModel");

const getToDo = async (req, res) => {
  const todo = await ToDoModel.find({});
  res.send(todo);
};

const saveToDo = (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (req, res) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

const updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports = { getToDo, saveToDo, updateToDo, deleteToDo };
