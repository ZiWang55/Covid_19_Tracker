const loginControllers = require("../controllers/loginControllers");

const router = require("express").Router();

router.route("/:id")
    .get(loginControllers.findById)
    .post(loginControllers.create)
    .put(loginControllers.update)
    .delete(loginControllers.remove)

module.exports = router;