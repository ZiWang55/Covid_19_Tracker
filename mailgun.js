const mailgun = require('mailgun-js');
require('dotenv').config()

// this points to the database query model - may need to update later
const db = require('./models/login.js')

// you will need to add these to your local .env file
// please see Slack chat for these two values
const API_KEY = process.env.API_KEY
const DOMAIN = process.env.DOMAIN

// this variable will contain an array of email addresses queries from database
const optInEmailList = [];

const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

// query database for all users that are opted-in for emails
db.find({ opt_in : true }).then((optInList) => {
// then extract the emails from each result in the list of ppl who have opted in
	optInList.filter((element) => {
// add that email to a dedicated array we'll use as our final email list
		optInEmailList.push(element.emailAddress)
	})

})



const emailData = {
	from: 'Covid-19 Tracker <noreply@covid-track3r->',
	to: optInEmailList,
	subject: 'Hello',
	text: 'Welcome to the Covid-19 Tracker'
};


  mg.messages().send(emailData, function (error, body) {
        console.log('workin?',body);
      });
