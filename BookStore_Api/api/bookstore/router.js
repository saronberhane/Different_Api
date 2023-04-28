const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  deleteAllBooks,
  createBook,
} = require("./controller");

router.route("/").get(getAllBooks).post(createBook).delete(deleteAllBooks);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
