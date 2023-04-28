const express = require("express");
const app = express();
const blogRouter = require("../api/blog/router");

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use("/api/blog", blogRouter);

module.exports = app;
