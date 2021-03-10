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
            .catch(err => res.status(422).json(err))
    }
}