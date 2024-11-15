// Importing the Express library to create a router for handling user-related routes.
const express = require("express"); 

// Creating an instance of the Express Router to define routes for user operations.
const router = express.Router(); 

// Importing a custom middleware function for token validation to secure specific routes.
const validateToken = require("../middleware/tokenValidationMiddleware"); 

// Define routes for user-related operations
const {
    // Controller function to retrieve a specific user's details.
    getUser, 
    // Controller function to retrieve a list of all users.
    getUsers, 
    // Controller function to handle user registration.
    userRegister, 
    // Controller function to handle user login.
    loginUser
} = require("../controllers/usercontroller");

// Route to register a new user
router.route("/").post(userRegister);
// - Method: POST
// - Endpoint: "/"
// - Functionality: Handles user registration by calling the `userRegister` controller function.
// - No authentication required.

// Route to retrieve a specific user's details
router.route("/").get(validateToken, getUser);
// - Method: GET
// - Endpoint: "/"
// - Functionality: Retrieves the details of a specific user by calling the `getUser` controller function.
// - Requires a valid token to access this route (secured by the `validateToken` middleware).

// Uncomment this route to retrieve a list of all users
// router.route("/").get(validateToken, getUsers);
// - Method: GET
// - Endpoint: "/"
// - Functionality: Retrieves all users by calling the `getUsers` controller function.
// - Requires a valid token (secured by the `validateToken` middleware).

// Route to handle user login
router.route("/login").post(loginUser);
// - Method: POST
// - Endpoint: "/login"
// - Functionality: Authenticates a user and generates a token by calling the `loginUser` controller function.
// - No authentication required to access this route.

// Exporting the router to make these routes available to the main application.
module.exports = router; 
