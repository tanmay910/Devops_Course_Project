// Import necessary modules
const express = require('express'); // Express framework for building the application
const cors = require('cors'); // Middleware to handle Cross-Origin Resource Sharing (CORS)
const app = express(); // Initialize an Express application

// Load environment variables from the .env file
require('dotenv').config();

// Import database connection configuration.
require('./config/db_conn');

// Define the server port, defaulting to 9001 if not provided in environment variables.
const port = process.env.PORT || 9001;

// Middleware to enable CORS (allow cross-origin requests)
app.use(cors());

// Middleware to parse JSON payloads in incoming requests.
app.use(express.json());

// Middleware to parse URL-encoded form data.
app.use(express.urlencoded({ extended: true }));

// Route for handling user-related requests.
app.use("/users", require("./routes/userRouter"));

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Log a message when the server is up and running
});
