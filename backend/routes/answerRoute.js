const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const z = require("zod");
const { Answers } = require("../db");
const { authMiddleware } = require("../middleware");
const JWT_SECRET = process.env.JWT_SECRET;
const ansBody = z.object({
  questionId: z.string(),
  answer: z.string(),
});
const AnswerBody = z.object({
  assignmentCode: z.string(),
  studentRollNumber: z.string(),
  studentName: z.string(),
  answers: z.array(ansBody),
  plagiarismReport: z.number().optional(),
});

router.post("/postanswer", authMiddleware, async (req, res) => {
  const { success } = AnswerBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Inputs are invalid.",
    });
  }

  try {
    const ans = await Answers.create({
      assignmentCode: req.body.assignmentCode,
      studentRollNumber: req.body.studentRollNumber,
      studentName: req.body.studentName,
      answers: req.body.answers,
      plagarismReport: req.body.plagarismReport,
      time: new Date(req.body.time),
    });
    res.json({ message: "Answer Submitted Succefully" });
  } catch (error) {
    console.error("error savind ans: ", error);
    res.status(500).json({ message: "failed to submit the answer" });
  }
});
module.exports = router;
