const mongoose = require("mongoose");

const { db } = require("../configs");

module.exports = () => {
  mongoose
    .connect(db.remote)
    .then((conn) => {
      console.log("Successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });

  const db_conn = mongoose.connection;

  db_conn.on("error", (err) => {
    console.log("ERROR");
    console.log(err);
  });

  db_conn.on("disconnected", () => {
    console.log("DB is disconnected");
  });
};
