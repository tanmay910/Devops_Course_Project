// Import necessary modules
const express = require('express'); // Express framework for creating web applications
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const app = express(); // Initialize an Express application

// Load environment variables from .env file
require('dotenv').config();

// Import database connection configuration
require('./config/db_conn');

// Specify the server port, defaulting to 9000 if not provided in environment variables
const port = process.env.PORT || 9000;

// Middleware to handle CORS (allow cross-origin requests)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Routes for handling product-related requests
app.use("/products", require("./routes/productRouter"));

// Routes for handling filter-related requests
app.use("/filter", require("./routes/filterRouter"));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Log a message indicating server is running
});
