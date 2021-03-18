const router = require("express").Router();
const loginController = require('../../controllers/loginControllers');

// Matches with "/api/users"
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

router.route("/:id")
  .get(loginController.findAll)
  .post(loginController.create)
  .put(loginController.update)
  .delete(loginController.remove);

module.exports = router;