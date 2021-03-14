const router = require('express').Router();
const loginRoute = require('./login');
const homepageRoute = require('./homepage');
const settingsRoute = require('./settings');
const newUserRoute = require('./newUser');
// require('dotenv').config({ path: '../.env' });

// Our routes here!
router.use("/login", loginRoute);
router.use("/homepage", homepageRoute);
router.use("/settings", settingsRoute);
router.use("/users", newUserRoute);

module.exports = router;
