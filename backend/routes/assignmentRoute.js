const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware");
const { z } = require("zod");
const { Assignment, Answers } = require("../db");
const { default: mongoose } = require("mongoose");
const questionBody = z.object({
  question_id: z.string(),
  questionNumber: z.number(),
  questionText: z.string(),
});
const assignmentBody = z.object({
  assignmentCode: z.string(),
  title: z.string(),
  questions: z.array(questionBody),
  plag: z.boolean(),
});

//create assignment
router.post("/create", authMiddleware, async (req, res) => {
  const { success } = assignmentBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Invalid input types",
    });
  }
  const ExistingAssignment = await Assignment.findOne({
    assignmentCode: req.body.assignmentCode,
  });

  if (ExistingAssignment) {
    return res.status(411).json({
      message: "Assignment Code is already taken",
    });
  }
  const assignment = await Assignment.create({
    teacherId: req.userId,
    assignmentCode: req.body.assignmentCode,
    title: req.body.title,
    questions: req.body.questions,
    plag: req.body.plag,
    deadline: req.body.deadline,
  });

  res.status(200).json({ assignment });
});
//view assignment
router.get("/view", authMiddleware, async (req, res) => {
  try {
    const assignments = await Assignment.find({
      teacherId: req.userId,
    });

    if (assignments.length === 0) {
      throw new Error("No Assignments Created");
    }

    res.json({
      assignments: assignments,
    });
  } catch (error) {
    console.error("Error fetching assignments:", error);
    res.status(500).json({ message: error.message });
  }
});

//view particular assignment
router.get("/view/:Qno", authMiddleware, async (req, res) => {
  const assignmentcode = req.params.Qno;

  try {
    const answers = await Answers.find({
      assignmentCode: assignmentcode,
    });
    if (!answers) {
      return res.status(404).json({ message: "Submissions not found" });
    }
    res.json({ answers });
  } catch (error) {
    console.error("Error fetching assignment:", error);
    res.status(500).json({ message: "Error fetching assignment" });
  }
});
//view asssignment via assignment code
router.get("/Sview/:assignmentcode", authMiddleware, async (req, res) => {
  const assignmentCode = req.params.assignmentcode;
  console.log("Received assignment code:", assignmentCode);

  try {
    const assignment = await Assignment.findOne({
      assignmentCode: assignmentCode,
    });
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    // // Set a cookie with the assignment code
    // res.cookie("assignmentCode", assignmentCode, {
    //   httpOnly: true, // Recommended for security
    //   secure: false, // Set to true if using HTTPS
    //   sameSite: "lax", // Helps prevent CSRF attacks
    //   maxAge: 60 * 60 * 1000, // 1 hour
    // });

    res.json({ assignment });
  } catch (error) {
    console.error("Error fetching assignment:", error);
    res.status(500).json({ message: "Assignment Code is invalid" });
  }
});

// router.post("/submit", authMiddleware, async (req, res) => {
//   try {
//     try {
//       const student = await student.findOne({
//         _id: req.userId,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     const answer = await Answers.create({
//       assignmentCode: req.body.assignmentCode,
//       studentRollNumber: student.rollnumber,
//       studentName: student.username,
//       answers: req.body.answers,
//       plagarismReport: 90,
//       time: req.body.time,
//     });

//     res.status(200).json({ answer });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     console.log(error);
//   }
// });
module.exports = router;
