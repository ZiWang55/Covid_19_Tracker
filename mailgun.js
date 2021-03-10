/**
 *  M A I L G U N
 *
 *  this handles the email functionality of the site.
 *  when a user signs up they are given a choice to opt-in
 *  to receiving emails.  if they are opt-ed in, we will email
 *  them case number information to their website on a regular basis.
 *
 *  opt-ed in or not, do we still send them a welcome email?
 *
 */

const mailgun = require("mailgun-js");
require("dotenv").config();
import axios from "axios";
import { fetchDailyData } from "./client/src/api/index";

// this points to the database query model - may need to update later
const db = require("./models/login.js");

const todaysDate = new Date().toDateString();
const updateSubject = `COVID-19 TRACKER: Your Daily Update is Here for ${todaysDate}`;

// you will need to add these to your local .env file
// please see Slack chat for these two values
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;

// this variable will contain an array of email addresses queries from database
const optInEmailList = [];

// creates main Mailgun object to do work
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

/**
 *
 * dailyEmailBlast() - this function will email everyone in our database that is opted in
 *
 */

async function dailyEmailBlast() {
  // API call to get the relevant info for the email blast
  let dailyCases = await fetchDailyData();

  // this will be the body text of the daily email blast
  // the dailyCases stuff will need to be further deconstructed and
  // styled appropriately

  const dailyEmailBlastText = `

  Hello from Your COVID-19 Tracker App!  You are receiving this email because you are opted to receive
  regular COVID-19 updates.  Below you will find the case counts for ${todaysDate}:

  ${dailyCases}`;

  // query database for all users that are opted-in for emails
  db.find({ opt_in: true }).then((optInList) => {
    // then extract the emails from each result in the list of ppl who have opted in
    optInList.filter((element) => {
      // add that email to a dedicated array we'll use as our final email list
      optInEmailList.push(element.emailAddress);
    });
  });

  // set up the specifics of the email
  const emailData = {
    from: "Covid-19 Tracker <noreply@covid-track3r-app.herokuapp.com>",
    to: optInEmailList,
    subject: updateSubject,
    text: dailyEmailBlastText,
  };

  mg.messages().send(emailData, function (error, body) {
    console.log("working on sending those emails...", body);
  });
}

/**
 *
 * welcomeEmail() - this function will email a new user a welcome email
 *
 */

async function welcomeEmail(newUserEmailAddress) {
  const welcomeSubject = "Welcome to COVID-19 Tracker!  Thanks for Signing Up.";
  // this will be the body text of the daily email blast
  // the dailyCases stuff will need to be further deconstructed and
  // styled appropriately

  const welcomeEmailBlastText = `
  
	Welcome to COVID-19 Tracker App!  You are receiving this email because you signed up to our website:
	covid-track3r-app, hosted on Heroku at https://covid-track3r-app.herokuapp.com!  Thank you for joining.`;

  // set up the specifics of the email
  const emailData = {
    from: "Covid-19 Tracker <noreply@covid-track3r-app.herokuapp.com>",
    to: newUserEmailAddress,
    subject: welcomeSubject,
    text: welcomeEmailBlastText,
  };

  mg.messages().send(emailData, function (error, body) {
    console.log("working on sending that welcome emails...", body);
  });
}
