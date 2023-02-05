const express = require('express');
const colors = require('colors');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

const taskRoute = require('./routes/taskRoute');

const PORT = process.env.PORT || 5000;

const app = express();

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoute);

// * Routes
app.get('/', (req, res) => {
	res.send('Welcome to homepage');
});

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`.brightRed.underline.italic);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
