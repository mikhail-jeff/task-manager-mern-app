const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');

const router = express.Router();

// * Create a Task
router.post('/', createTask);

// * Get All Tasks
router.get('/', getTasks);

// * Get A Single Task
router.get('/:id', getTask);

// * Delete a Task
router.delete('/:id', deleteTask);

// * Update a Task
router.put('/:id', updateTask);

module.exports = router;
