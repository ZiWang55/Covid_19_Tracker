const router = require("express").Router();
const loginController = require("../../controllers/loginControllers");

// Match homepage with user's name
router.route("/:id")
    .get(loginController.findById)

module.exports = router;