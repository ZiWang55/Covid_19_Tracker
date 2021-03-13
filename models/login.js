const mongoose = require("mongoose");

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

// Our login model
const loginSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your full name",
  },
  email: {
    type: String,
    match: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
    unique: true,
    required: "Enter an email address",
  },
  password: {
    type: String,
    trim: true,
    required: "Enter a password",
  },
  county: {
    type: String,
    trim: true,
    required: "Enter your county name",
  },
  opt_in: {
    type: Boolean,
  },
});



const Login = mongoose.model("Login", loginSchema);

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
/* Login.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
 */

module.exports = Login;
