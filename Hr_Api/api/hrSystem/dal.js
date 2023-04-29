const HrSystemModel = require("./model");

class HrSystem {
  static async createHrSystem(data) {
    try {
      const newHrSystem = HrSystemModel.create({
        departmentName: data.departmentName,
        employeeName: data.employeeName,
        hoursWorked: data.hoursWorked,
        jobTitle: data.jobTitle,
        activeStatus: data.activeStatus,
      });
      return newHrSystem;
    } catch (error) {
      throw error;
    }
  }

  //get by departmentName and employeeName
  static async getByEmployeeOrDepartmentName(departmentName, employeeName) {
    try {
      const hrSystem = await HrSystemModel.find({
        $or: [
            employeeName ? { employeeName } : {},
            departmentName ? { departmentName } : {},
          ],
      });
      return hrSystem;
    } catch (error) {
      throw error;
    }
  }

  //get all hr info
  static async getAllHrSystem() {
    try {
      const hrSystem = await HrSystemModel.find();
      return hrSystem;
    } catch (error) {
      throw error;
    }
  }

  //update hr system
  static async updateHrSystem({ data, id }) {
    try {
      const hrSystem = await HrSystemModel.findByIdAndUpdate(
        id,
        {
          departmentName: data.departmentName,
          employeeName: data.employeeName,
          hoursWorked: data.hoursWorked,
          jobTitle: data.jobTitle,
          activeStatus: data.activeStatus,
        },
        { runValidators: true, new: true }
      );
      return hrSystem;
    } catch (error) {
      throw error;
    }
  }

  //deleting hr system by active status or employee name
  static async deleteHrSystem(activeStatus, employeeName) {
    try {
      await HrSystemModel.findByIdAndDelete(activeStatus, employeeName);
    } catch (error) {
      throw error;
    }
  }

  //delete all hr system info
  static async deleteAllHrSystem() {
    try {
      await HrSystemModel.deleteMany({});
    } catch (error) {
      throw error;
    }
  }
}

module.exports = HrSystem;
