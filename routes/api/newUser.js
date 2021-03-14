const router = require("express").Router();
const loginController = require('../../controllers/loginControllers');

// Matches with "/api/users"
router.route("/")
  .post(loginController.create);

module.exports = router;