const mailgun = require('mailgun-js');
require('dotenv').config()
const API_KEY = process.env.API_KEY
const DOMAIN = process.env.DOMAIN
const mg = mailgun({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});


console.log(API_KEY, DOMAIN)
const emailData = {
	from: 'Covid-19 Tracker <noreply@covid-track3r->',
	to: 'troydorman@gmail.com',
	subject: 'Hello',
	text: 'Welcome to the Covid-19 Tracker'
};


  mg.messages().send(emailData, function (error, body) {
        console.log('workin?',body);
      });
