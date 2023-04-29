const { Schema, model } = require("mongoose");

const hrSystemSchema = new Schema(
  {
    departmentName: {
      type: String,
      required: [true, "Please provide the department name"],
      maxlength: [100, "Department name can not exceed 100 characters"],
      minlength: [1, "Department name can not be less than 1 character"],
    },

    employeeName: {
      type: String,
      require: [true, "Employee name is required"],
      maxlength: [100, "First name can not exceed 100 characters"],
      minlength: [1, "First name can not be less than 1 character"],
    },

    hoursWorked: {
      type: Number,
      required: [true, "Number of hours worked is required"],
      min: [1, "Number of hours worked can not be less than 1 hour"],
    },

    jobTitle: {
      type: String,
      require: [true, "Please provide your job title"],
    },

    activeStatus: {
      type: String,
      require: [true, "Please tell us if you are on or off clock"],
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);

const HrSystem = model("HrSystem", hrSystemSchema);
module.exports = HrSystem;
