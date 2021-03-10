const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loginSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter your full name"
    },
    email: {
      type: String,
      match: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
      unique: true,
      required: "Enter an email address"
    },
    password: {
      type: String,
      trim: true,
      required: "Enter a password"
    },
    county: {
      type: String,
      trim: true,
      required: "Enter your county name"
    },
    opt_in: {
      type: Boolean
    }
  }
);

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;