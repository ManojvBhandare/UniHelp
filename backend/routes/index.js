const express = require("express");
const TeacherRoute = require("./teacherRoute");
const AssignmentRoute = require("./assignmentRoute");
const StudentRoute = require("./studentRoute");
const AnswerRoute = require("./answerRoute");
const cookieParser = require("cookie-parser");
const Router = express.Router();
Router.use(cookieParser());
Router.use("/teacher", TeacherRoute);
Router.use("/assignment", AssignmentRoute);
Router.use("/student", StudentRoute);
Router.use("/answer", AnswerRoute);

module.exports = Router;
