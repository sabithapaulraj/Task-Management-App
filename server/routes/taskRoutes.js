const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  addTask,
  editTask,
  deleteTask,
} = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').put(editTask).delete(deleteTask);

module.exports = router;
