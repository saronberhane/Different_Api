const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  deleteBooks,
  createBook,
} = require("./controller");

router.route("/").get(getAllBooks).post(createBook).delete(deleteBooks);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
