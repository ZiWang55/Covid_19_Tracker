/**
 *
 *  SEEDER FILE FOR DATABASE
 *
 *  just run 'node seed.js' to remove everything in the database and add this dummy data
 *  this file will need updating as we progress.  for instance, we'll need to replace the
 *  randomly generated password names for encrypted (bcrypt) passwords.
 *
 */

const mongoose = require("mongoose");
const db = require("../models/login");
require("dotenv").config({ path: ".env" });
const bcrypt = require('bcryptjs')

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/* db.addHook("beforeCreate", (user) => {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
}); */
// big json array of 24 randomly generated users (minimized for brevity)
const loginSeed = [
  {
    name: "Troy Dorman",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(10), null),
    county: "Canyon",
    email: "troydorman@gmail.com",
    opt_in: true,
  },
  {
    name: "Zi Wang",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(10), null),
    county: "Hennepin",
    email: "ziwang55@gmail.com",
    opt_in: true,
  },
  {
    name: "James Leitschuh",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(10), null),
    county: "Hennepin",
    email: "james.leitschuh02@gmail.com",
    opt_in: true,
  },
  {
    name: "Kai Dong",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(10), null),
    county: "Hennepin",
    email: "dongkai981@gmail.com",
    opt_in: true,
  },
  {
    name: "Peter Phenow",
    password: bcrypt.hashSync("password", bcrypt.genSaltSync(10), null),
    county: "Hennepin",
    email: "peter.phenow@gmail.com",
    opt_in: true,
  },
];

/**
 * WARNING!! WARNING!! WARNING!! WARNING!! WARNING!!
 *
 *          THIS WILL WRITE TO THE PRODUCTION DATABASE ONLY RUN THIS SEED WHEN IT'S SAFE!
 *
 * WARNING!! WARNING!! WARNING!! WARNING!! WARNING!!
 */

// delete everything in the database first for a fresh reset
// populate the covidtracker/logins collection with the dummy data

db.deleteMany({})
  .then(() => db.insertMany(loginSeed))
  .then((data) => {
    console.log("data", data);
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
