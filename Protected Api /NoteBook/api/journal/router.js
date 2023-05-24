const express = require("express");
const { model } = require("mongoose");
const router = espress.Router();
const protect = require("../protect/index")

const {
  createJournal,
  getByTagOrDate,
  getAllJournal,
  updateJournal,
  deleteJournal,
  deleteAllJournal,
} = require("./controller");

router
  .router("/")
  .get(getAllJournal)
  .post(createJournal)
  .delete(deleteAllJournal);
router.route("/by").get(getByTagOrDate).delete(deleteJournal);
router.route("/:id").patch(updateJournal);
router.route("/:title").delete(deleteJournal);

module.exports = router;
