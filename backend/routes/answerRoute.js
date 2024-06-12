const express = require("express");
const router = express.Router();
const z = require("zod");
const { Answers, Student } = require("../db");
const { authMiddleware } = require("../middleware");

const ansBody = z.object({
  questionId: z.string(),
  answer: z.string(),
});

const AnswerBody = z.object({
  assignmentCode: z.string(),
  answers: z.array(ansBody),
  plagiarismReport: z.number().optional(),
  time: z.string(), // Ensure time is a string representing a date
});

router.post("/postanswer", authMiddleware, async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);

  const result = AnswerBody.safeParse(req.body);
  if (!result.success) {
    console.log("Validation error:", result.error);
    return res.status(411).json({
      message: "Inputs are invalid.",
    });
  }

  try {
    const student = await Student.findOne({
      _id: req.userId,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("Student found:", student);

    try {
      await Answers.create({
        assignmentCode: req.body.assignmentCode,
        studentRollNumber: student.rollnumber, // Use the student's roll number from the database
        studentName: student.username, // Use the student's name from the database
        answers: req.body.answers,
        plagiarismReport: req.body.plagiarismReport,
        time: new Date(req.body.time),
      });

      res.json({ message: "Answer Submitted Successfully" });
    } catch (error) {
      console.error("Error saving answer: ", error);
      res.status(500).json({ message: "Failed to submit the answer" });
    }
  } catch (error) {
    console.error("Error finding student:", error);
    res.status(500).json({ message: "Error finding student" });
  }
});

module.exports = router;
