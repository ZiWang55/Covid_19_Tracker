const router = require('express').Router();
const loginRoute = require('./login');
const homepageRoute = require('./homepage');
const settingsRoute = require('./settings');
require('dotenv').config({ path: '../.env' });

// Our routes here!
router.use("/login", loginRoute);
router.use("/homepage", homepageRoute);
router.use("/settings", settingsRoute);

module.exports = router;
