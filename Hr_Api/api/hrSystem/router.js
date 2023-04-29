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
router.route("/:employeeName").get(getByEmployeeOrDepartmentName).delete(deleteHrSystem);
router.route("/:id").patch(updateHrSystem);
router.route("/:activeStatus").delete(deleteHrSystem);
router.route("/:departmentName").get(getByEmployeeOrDepartmentName);

module.exports = router;
