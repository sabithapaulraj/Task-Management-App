const Task = require('../models/taskModel');

// Get all tasks
const getAllTasks = async (req, res) => {
  const { title, status } = req.query;
  const query = {};
  if (title) query.taskName = new RegExp(title, 'i'); // Case-insensitive search
  if (status) query.status = status;

  const tasks = await Task.find(query);
  res.json(tasks);
};

// Add a task
const addTask = async (req, res) => {
  const { taskName, priority, status } = req.body;

  if (!taskName || !priority || !status) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newTask = await Task.create({ taskName, priority, status });
  res.status(201).json(newTask);
};

// Edit a task
const editTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const { taskName, priority, status } = req.body;

  task.taskName = taskName || task.taskName;
  task.priority = priority || task.priority;
  task.status = status || task.status;

  const updatedTask = await task.save();
  res.json(updatedTask);
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id; // Assuming you're passing the task ID in the route parameters
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Delete the task
    await Task.findByIdAndDelete(taskId);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { getAllTasks, addTask, editTask, deleteTask };
