const db = require("../models");
const welcomeEmail = require ('../mailgun')

module.exports = {
    create: function(req,res) {
        console.log("OUR REQUEST.BODY IS", req.body);
        db.Login
            .create(req.body)
            .then(dbModel => 
                {
                    console.log('dbModel',dbModel);
                    res.json(dbModel);
                    // send new user welcome email
                    welcomeEmail(dbModel.email)

                })
            // .catch(err => res.status(422).json(err));
            .catch((err) => console.log(err));
    },
    remove: function(req,res) {
        db.Login
            .findById({ _id: rqe.params.id })
            .then(data => data.remove())
            .then(console.log("User Deleted Succesfully"))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req,res) {
        db.Login
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    update: function(req,res) {
        db.Login
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    findAll: function(req,res) {
        db.Login
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
    
};