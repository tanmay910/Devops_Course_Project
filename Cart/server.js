// Import necessary modules
const express = require('express'); // Express framework for building web applications
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const app = express(); // Initialize Express app

// Load environment variables from .env file
require('dotenv').config();

// Import database connection configuration
require('./config/db_conn');

// Set the server port, using environment variable or default to 9003
const port = process.env.PORT || 9003;

// Middleware to handle CORS (allows cross-origin requests)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define routes for "cart" functionality, connecting to cartRouter
app.use("/cart", require("./routes/cartRouter"));

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Log a message when the server is running
});
