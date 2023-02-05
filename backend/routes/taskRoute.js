const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');

const router = express.Router();

// * Create a Task
router.post('/api/tasks', createTask);

// * Get All Tasks
router.get('/api/tasks', getTasks);

// * Get A Single Task
router.get('/api/tasks/:id', getTask);

// * Delete a Task
router.delete('/api/tasks/:id', deleteTask);

// * Update a Task
router.put('/api/tasks/:id', updateTask);

module.exports = router;
