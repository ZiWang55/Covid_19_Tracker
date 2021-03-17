const router = require('express').Router();
const loginRoute = require('./login');
const logoutRoute = require('./logout');
const homepageRoute = require('./homepage');
const settingsRoute = require('./settings');
require('dotenv').config({ path: '../.env' });

// Our routes here!
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/homepage", homepageRoute);
router.use("/settings", settingsRoute);

module.exports = router;
