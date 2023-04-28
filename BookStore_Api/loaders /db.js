const mongoose = require("mongoose");
const configs = require("../config");

module.exports = () => {
  mongoose
    .connect(configs.db.remote)
    .then((con) => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.error(error);
    });

  //to check if the database is working
  const db_connection = mongoose.connection;

  db_connection.on("error", (error) => {
    console.log("There is an error");
    console.error(error);
  });

  db_connection.on("disconnected", () => {
    console.log("the database is disconnected");
  });
};
