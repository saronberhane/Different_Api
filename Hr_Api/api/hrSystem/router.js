const express = require("express");
const router = express.Router();

const {
  createHrSystem,
  getByEmployeeOrDepartmentName,
  getAllHrSystem,
  updateHrSystem,
  deleteHrSystem,
  deleteAllHrSystem,
} = require("./controller");

router
  .route("/")
  .get(getAllHrSystem)
  .post(createHrSystem)
  .delete(deleteAllHrSystem);
router.route("/by").get(getByEmployeeOrDepartmentName).delete(deleteHrSystem);
router.route("/:id").patch(updateHrSystem);
router.route("/:activeStatus").delete(deleteHrSystem);


module.exports = router;
