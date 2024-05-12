const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const z = require("zod");
const { Student } = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const signupBody = z.object({
  mailId: z.string().email(),
  username: z.string(),
  rollnumber: z.string(),
  password: z.string(),
});
router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Enter Inputs in proper format.",
    });
  }
  const ExistingUser = await Student.findOne({
    mailId: req.body.mailId,
  });
  if (ExistingUser) {
    return res.status(411).json({
      message: "Email already taken.",
    });
  }
  const user = await Student.create({
    mailId: req.body.mailId,
    username: req.body.username,
    rollnumber: req.body.rollnumber,
    password: req.body.password,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "Student Signed Up successfully.",
    token: token,
  });
});

//Sign In route
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

  const user = await Student.findOne({
    mailId: req.body.mailId,
    password: req.body.password,
  });

  if (user) {
    // // Assuming you have access to the student's roll number and name
    // const rollNumber = user.rollnumber;
    // const name = user.username; // Or however you store the student's name

    // // Set cookies with the student's roll number and name
    // res.cookie("rollNumber", rollNumber, {
    //   httpOnly: true,
    //   secure: false, // Set to true if using HTTPS
    //   sameSite: "lax",
    //   maxAge: 60 * 60 * 24 * 7, // 1 week
    // });

    // res.cookie("name", name, {
    //   httpOnly: true,
    //   secure: false, // Set to true if using HTTPS
    //   sameSite: "lax",
    //   maxAge: 60 * 60 * 24 * 7, // 1 week
    // });

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
//student will put the assignment code and gets into assignment page

module.exports = router;
