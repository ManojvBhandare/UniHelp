const express = require("express");
const TeacherRoute = require("./teacherRoute");
const AssignmentRoute = require("./assignmentRoute");
const StudentRoute = require("./studentRoute");
const Router = express.Router();
Router.use("/teacher", TeacherRoute);
Router.use("/assignment", AssignmentRoute);
Router.use("/student", StudentRoute);
module.exports = Router;
