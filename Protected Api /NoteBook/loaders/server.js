const express = require("express");
const app = express();

//Routes
const user = require("../api/user/route");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", user);

module.exports = app;
