const mongoose = require("mongoose");
const db = require("../models/login");
require("dotenv").config({ path: "../.env" });

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
  
    })

// big json array of 24 randomly generated users (minimized for brevity)
const loginSeed = [
    {
      "name": "Hopkins Merritt",
      "password": "Emergent",
      "county": "Rwanda",
      "email": "hopkinsmerritt@emergent.com",
      "opt_in": false,
      "date": "Mon Dec 21 1992 04:08:08 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Coleman Hardy",
      "password": "Oronoko",
      "county": "Slovenia",
      "email": "colemanhardy@oronoko.com",
      "opt_in": false,
      "date": "Sat Feb 24 2007 05:21:18 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Jane Joyner",
      "password": "Enersol",
      "county": "Niger",
      "email": "janejoyner@enersol.com",
      "opt_in": true,
      "date": "Sun Aug 17 2008 18:38:41 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Ferguson Stephens",
      "password": "Schoolio",
      "county": "Ecuador",
      "email": "fergusonstephens@schoolio.com",
      "opt_in": false,
      "date": "Mon Jan 28 1974 16:58:54 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Lowery Wiley",
      "password": "Deepends",
      "county": "Uruguay",
      "email": "lowerywiley@deepends.com",
      "opt_in": false,
      "date": "Wed Aug 02 1972 14:29:34 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Cornelia Hampton",
      "password": "Isoplex",
      "county": "Guyana",
      "email": "corneliahampton@isoplex.com",
      "opt_in": true,
      "date": "Sun Dec 21 1975 21:28:53 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Harrell Mueller",
      "password": "Inear",
      "county": "Slovak Republic",
      "email": "harrellmueller@inear.com",
      "opt_in": false,
      "date": "Sat Sep 03 1994 05:21:23 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Trudy Shaffer",
      "password": "Jamnation",
      "county": "Norfolk Island",
      "email": "trudyshaffer@jamnation.com",
      "opt_in": true,
      "date": "Thu Nov 07 1974 18:37:04 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Allison Bernard",
      "password": "Teraprene",
      "county": "Congo",
      "email": "allisonbernard@teraprene.com",
      "opt_in": true,
      "date": "Sun Feb 09 2020 08:58:28 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Cochran Compton",
      "password": "Acumentor",
      "county": "Belize",
      "email": "cochrancompton@acumentor.com",
      "opt_in": true,
      "date": "Thu Nov 01 2018 06:14:22 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Burns Villarreal",
      "password": "Fitcore",
      "county": "Laos",
      "email": "burnsvillarreal@fitcore.com",
      "opt_in": false,
      "date": "Wed Aug 01 2007 14:04:28 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Lisa Davis",
      "password": "Kiggle",
      "county": "East Timor",
      "email": "lisadavis@kiggle.com",
      "opt_in": true,
      "date": "Thu Dec 09 1971 15:24:46 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Gale Morris",
      "password": "Cytrak",
      "county": "Mauritania",
      "email": "galemorris@cytrak.com",
      "opt_in": false,
      "date": "Thu Aug 18 2016 11:07:04 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Mcmillan Rios",
      "password": "Twiggery",
      "county": "Brazil",
      "email": "mcmillanrios@twiggery.com",
      "opt_in": false,
      "date": "Sun Sep 17 1989 22:26:24 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Juliana Jenkins",
      "password": "Kenegy",
      "county": "Saint Vincent and The Grenadines",
      "email": "julianajenkins@kenegy.com",
      "opt_in": false,
      "date": "Mon Mar 26 2007 04:31:09 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Brewer Navarro",
      "password": "Moltonic",
      "county": "Equatorial Guinea",
      "email": "brewernavarro@moltonic.com",
      "opt_in": false,
      "date": "Fri Jun 12 2020 04:13:24 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Bauer Mckay",
      "password": "Nixelt",
      "county": "Grenada",
      "email": "bauermckay@nixelt.com",
      "opt_in": true,
      "date": "Tue Aug 10 1982 23:43:42 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Stella Mccullough",
      "password": "Kangle",
      "county": "Luxembourg",
      "email": "stellamccullough@kangle.com",
      "opt_in": true,
      "date": "Tue Nov 16 1971 05:26:46 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Kirsten Everett",
      "password": "Dreamia",
      "county": "Eritrea",
      "email": "kirsteneverett@dreamia.com",
      "opt_in": true,
      "date": "Sun Aug 03 1997 06:15:02 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Rosalyn Leblanc",
      "password": "Biohab",
      "county": "Hong Kong",
      "email": "rosalynleblanc@biohab.com",
      "opt_in": false,
      "date": "Sat Oct 11 2008 12:48:01 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Delia Wall",
      "password": "Conferia",
      "county": "Bahamas",
      "email": "deliawall@conferia.com",
      "opt_in": true,
      "date": "Sat Jan 28 1978 22:27:58 GMT-0700 (Mountain Standard Time)"
    },
    {
      "name": "Harper Kane",
      "password": "Acium",
      "county": "Nicaragua",
      "email": "harperkane@acium.com",
      "opt_in": false,
      "date": "Sat Jun 15 2013 23:13:03 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Bernice Hoover",
      "password": "Zeam",
      "county": "Paraguay",
      "email": "bernicehoover@zeam.com",
      "opt_in": false,
      "date": "Sat Sep 09 1989 11:56:12 GMT-0600 (Mountain Daylight Time)"
    },
    {
      "name": "Dianne Flores",
      "password": "Vinch",
      "county": "Tunisia",
      "email": "dianneflores@vinch.com",
      "opt_in": false,
      "date": "Fri Dec 26 2008 16:51:22 GMT-0700 (Mountain Standard Time)"
    }
  ]




db.deleteMany({})
.then(() => db.insertMany(loginSeed))
.then(data => {
    console.log('data', data)
    console.log(data.length + ' records inserted!');
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
}) 

