const mongoose = require("mongoose"); 
// Importing the mongoose library to interact with a MongoDB database.

// Defining the schema for the "User" model
const userSchema = mongoose.Schema(
    {
        email: {
            type: String, 
            // Data type for the email field is a string.

            required: [true, "Please enter your email"], 
            // Email is a required field, and a custom error message is provided if this field is not supplied.
        },

        password: {
            type: String, 
            // Data type for the password field is a string.

            required: [true, "Please enter your password"], 
            // Password is a required field, and a custom error message is provided if this field is missing.
        },

        firstName: {
            type: String, 
            // Data type for the first name field is a string.

            required: [true, "Please enter your first name"], 
            // First name is a required field with a custom error message.
        },

        lastName: {
            type: String, 
            // Data type for the last name field is a string.

            required: [true, "Please enter your last name"], 
            // Last name is a required field with a custom error message.
        },

        age: {
            type: Number, 
            // Data type for the age field is a number.

            required: [true, "Please enter your age"], 
            // Age is a required field with a custom error message.
        },

        phone: {
            type: String, 
            // Data type for the phone field is a string to accommodate non-numeric characters like "+".

            required: [true, "Please enter your phone number"], 
            // Phone is a required field with a custom error message.
        },

        gender: {
            type: String, 
            // Data type for the gender field is a string.

            // enum: ['male', 'female']
            // Uncomment this line if you want to restrict the field to only accept 'male' or 'female'.
        },
    },
    {
        timestamps: true, 
        // Automatically adds "createdAt" and "updatedAt" fields to the schema.
    }
);

// Exporting the "User" model based on the defined schema
module.exports = mongoose.model("User", userSchema);
// The model is named "User" and will map to a MongoDB collection named "users".

