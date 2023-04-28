const express = require("express");
const app = express();
const bookStoreRouter = require("../api/bookstore/router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/bookstore", bookStoreRouter);

module.exports = app;
