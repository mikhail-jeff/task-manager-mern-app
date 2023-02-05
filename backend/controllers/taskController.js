const Task = require('../models/taskModel');

// * Create Task
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// * Get All Tasks
const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// * Get A Single Task
const getTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json(`No task with an id: ${id}`);
		}

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// * Delete Task
const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndDelete(id);

		if (!task) {
			return res.status(404).json(`No task with an id: ${id}`);
		}

		res.status(200).send(`Task deleted!`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// * Update Task
const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
			runValidators: true,
		});

		if (!task) {
			return res.status(404).json(`No task with an id: ${id}`);
		}

		res.status(200).send(`Task updated!`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	createTask,
	getTasks,
	getTask,
	deleteTask,
	updateTask,
};
