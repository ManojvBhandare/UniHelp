const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const z = require("zod");
const { Teacher } = require("../db");

const JWT_SECRET = process.env.JWT_SECRET;
const signupbody = z.object({
  mailId: z.string().email(),
  username: z.string(),
  password: z.string(),
  subject: z.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupbody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Invalid Inputs",
    });
  }
  const ExistingUser = await Teacher.findOne({
    mailId: req.body.mailId,
  });

  if (ExistingUser) {
    return res.status(411).json({
      message: "User already exists",
    });
  }
  try {
    const user = await Teacher.create({
      mailId: req.body.mailId,
      username: req.body.username,
      password: req.body.password,
      subject: req.body.subject,
    });

    const userId = user._id;

    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
      message: "Teacher account created Successfully!",
      token: token,
    });
  } catch (error) {
    console.error("Error creating teacher account:", error);
    res.status(500).json({
      message: "Error creating teacher account",
    });
  }
});
const signinBody = z.object({
  mailId: z.string().email(),
  password: z.string(),
});

//signin post req
router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Invalid Inputs!!",
    });
  }

  const user = await Teacher.findOne({
    mailId: req.body.mailId,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in!",
  });
});

module.exports = router;
