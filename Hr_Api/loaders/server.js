const express = require("express")
const app = express();
const hrSystemRouter = require ("../api/hrSystem/router");

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/hrSystem", hrSystemRouter);

module.exports = app;