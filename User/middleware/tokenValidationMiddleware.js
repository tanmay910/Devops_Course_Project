// Importing `express-async-handler` to handle asynchronous errors gracefully in middleware.
const asyncHandler = require("express-async-handler");

// Importing `jsonwebtoken` to verify and decode JSON Web Tokens (JWT).
const jwt = require("jsonwebtoken");

// Loading environment variables from the `.env` file.
require("dotenv").config();

// Middleware to validate JWT tokens and authorize users.
const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    // Retrieve the authorization header from the request, supporting different casing.
    let authHeader = req.headers.Authorization || req.headers.authorization;

    // Check if the authorization header exists and follows the "Bearer <token>" format.
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        // Verify the token using the secret from environment variables.
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                // Respond with 401 if the token verification fails.
                res.status(401);
                res.json({ message: "User is not authorized" });
                return;
            }

            // Attach the decoded user information to the request object.
            req.user = decoded.user;

            // Proceed to the next middleware or controller.
            next();
        });
    } else {
        // Respond with 401 if no valid authorization header is provided.
        res.status(401);
        res.json({ message: "No token provided, user is not authorized" });
    }
});

// Exporting the `validateToken` middleware for use in other parts of the application.
module.exports = validateToken;
