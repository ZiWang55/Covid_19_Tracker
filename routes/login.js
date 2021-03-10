const loginControllers = require("../controllers/loginControllers");

const router = require("express").Router();

router.route("/")
    .get(loginControllers.findById)
    .post(loginControllers.create)

module.exports = router;