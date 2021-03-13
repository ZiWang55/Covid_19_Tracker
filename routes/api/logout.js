const router = require("express").Router();

router.route("/")
    .get((req, res) => {
        req.logout();
        res.send("Logged Out")
    })

module.exports = router;