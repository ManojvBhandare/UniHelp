const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware");
const { z } = require("zod");
const { Assignment } = require("../db");
const questionBody = z.object({
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

  const assignment = await Assignment.create({
    teacherId: req.userId,
    assignmentCode: req.body.assignmentCode,
    title: req.body.title,
    questions: req.body.questions,
    plag: req.body.plag,
  });

  res.status(200).json({ assignment });
});
//view assignment
router.get("/view", authMiddleware, async (req, res) => {});
module.exports = router;
