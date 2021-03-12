const router = require('express').Router();
const loginRoute = require('./login');
const homepageRoute = require('./homepage');
const settingsRoute = require('./settings');
import axios from 'axios';
require('dotenv').config({ path: '../.env' });

// Our routes here!

module.exports = router;
