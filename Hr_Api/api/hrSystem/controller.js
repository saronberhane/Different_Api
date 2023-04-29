const HrSystem = require("./dal");

//creating an hr info
exports.createHrSystem = async (req, res) => {
  try {
    const {
      departmentName,
      employeeName,
      hoursWorked,
      jobTitle,
      activeStatus,
    } = req.body;

    if (
      !departmentName ||
      !employeeName ||
      !hoursWorked ||
      !jobTitle ||
      !activeStatus
    ) {
      return res.status(400).json({
        status: "ERROR",
        message: "Please provide the required informations",
      });
    }

    //creating a new hr information
    const newHrSystem = await HrSystem.createHrSystem({
      departmentName,
      employeeName,
      hoursWorked,
      jobTitle,
      activeStatus,
    });

    //return the new hr information
    res.status(200).json({
      status: "SUCCESS",
      message: "The new Hr information was added successfully",
      data: {
        book: newHrSystem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};



//get hr information by department or employee name
exports.getByEmployeeOrDepartmentName = async (req, res) => {
  try {
    const hrSystem = await HrSystem.getByEmployeeOrDepartmentName(
      req.params.departmentName || req.params.employeeName
    );
    if (hrSystem.length === 0) {
      return res.status(404).json({
        status: "FAIL",
        message:
          "There is no information with this department name or employee name",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      data: {
        hrSystem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};


//get all hr information
exports.getAllHrSystem = async (req, res) => {
  try {
    const hrSystem = await HrSystem.getAllHrSystem();

    res.status(200).json({
      status: "SUCCESS",
      data: {
        hrSystem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//update hr information
exports.updateHrSystem = async (req, res) => {
  try {
    const hrSystemID = await HrSystem.getByid(req.params.id);
    if (!hrSystemID) {
      return res.status(404).json({
        status: "FAIL",
        message:"There is no information with this ID",
      });
    }

    const {
      departmentName,
      employeeName,
      hoursWorked,
      jobTitle,
      activeStatus,
    } = req.body;

    const hrSystem = await HrSystem.updateHrSystem({
      data: {
        departmentName,
        employeeName,
        hoursWorked,
        jobTitle,
        activeStatus,
      },
      id: req.params.id,
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "Hr information was successfully updated",
      data: {
        hrSystem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//delete hr system
exports.deleteHrSystem = async (req, res) => {
  try {
    const hrSystem = await HrSystem.getByEmployeeOrDepartmentName(
      req.params.activeStatus,
      req.params.employeeName
    );
    if (hrSystem.length === 0) {
      return res.status(404).json({
        status: "FAIL",
        message:
          "There is no information with this department name or employee name",
      });
    }

    await HrSystem.deleteHrSystem(
      req.params.activeStatus,
      req.params.employeeName
    );

    res.status(200).json({
      status: "SUCCESS",
      message: "The Hr information was deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//delete all hr information
exports.deleteAllHrSystem = async (req, res) => {
  try {
    const hrSystem = await HrSystem.deleteAllHrSystem();
    res.status(200).json({
      status: "SUCCESS",
      message: "The Hr information was deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};
