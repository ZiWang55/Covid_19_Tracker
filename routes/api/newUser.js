const router = require("express").Router();
const loginController = require('../../controllers/loginControllers');

// Matches with "/api/users"
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

module.exports = router;