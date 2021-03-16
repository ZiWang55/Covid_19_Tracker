const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
FacebookStrategy = require("passport-facebook").Strategy;
let callbackUrl;
const bcrypt = require("bcryptjs");
let masterPass = "";

const Login = require("../models/login");

const validPassword = function(password) {
  console.log("password, masterPass", password, masterPass);
  console.log(bcrypt.compareSync(password, masterPass))
  return bcrypt.compareSync(password, masterPass);
};

/* async function validPassword(password) {
 
  
  return bcrypt.compareSync(password, masterPass);
} */
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email",
    },
    (email, password, done) => {
      // When a user tries to sign in this code runs

      Login.find({ email: email }).then((dbUser) => {
        // If there's no user with the given email
        if (dbUser.length == 1) {
          masterPass = dbUser[0].password;
          console.log('masterPass on 28', masterPass)

          if (!validPassword(password)) {
            return done(null, false, {
              message: "Incorrect password.",
            });
          }
        } else if (dbUser.length == 0) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect

        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

/* if (config.use_env_variable) {
    callbackUrl =
      "https://ancient-waters-90063.herokuapp.com/auth/facebook/callback";
  } else {
    callbackUrl = "http://localhost:8080/auth/facebook/callback";
  }
  
  passport.use(
    new FacebookStrategy(
      {
        // we need to move these to environment variables
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: callbackUrl
      },
      (accessToken, refreshToken, profile, done) => {
        db.User.findOrCreate({
          where: { email: profile.id + "@facebook.com" },
          defaults: { password: profile.id + "@facebook.com" }
        }).spread((user, created) => {
          console.log("profile returned by fb: " + JSON.stringify(profile));
          console.log(
            user.get({
              plain: true
            })
          );
          console.log("profile returned by fb: " + JSON.stringify(profile));
          console.log(created);
  
          done(null, user);
        });
      }
    )
  ); */

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
