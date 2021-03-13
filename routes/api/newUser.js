const router = require("express").Router();
const booksController = require("../../controllers/loginControllers");

// Matches with "/api/books"
router.route("/")
  .post(.create);

module.exports = router;