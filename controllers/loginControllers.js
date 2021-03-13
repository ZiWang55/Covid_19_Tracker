const db = require("../models");

module.exports = {
    create: function(req,res) {
        db.Login
            .create(req.body)
            .then(data => res.json(data))
            .error(err => res.status(422).json(err));
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
    
};