const router = require('express').Router();
require('dotenv').config({ path: '../.env' });

const loginRoute = require('./login');
const logoutRoute = require('./logout');
const homepageRoute = require('./homepage');
const settingsRoute = require('./settings');
const newUserRoute = require('./newUser');

// Our routes here!
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/homepage", homepageRoute);
router.use("/settings", settingsRoute);
router.use("/users", newUserRoute);

module.exports = router;
