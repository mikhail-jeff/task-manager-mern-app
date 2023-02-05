const express = require('express');
const colors = require('colors');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

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
