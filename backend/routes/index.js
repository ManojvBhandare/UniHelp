const express = require("express");
const TeacherRoute = require("./teacherRoute");
const AssignmentRoute = require("./assignmentRoute");
const Router = express.Router();
Router.use("/teacher", TeacherRoute);
Router.use("/assignment", AssignmentRoute);
module.exports = Router;
