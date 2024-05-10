const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const TeacherSchema = new mongoose.Schema({
  mailId: {
    type: String,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  subject: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const StudentSchema = new mongoose.Schema({
  mailId: {
    type: String,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
    lowercase: true,
    trim: true,
  },
  rollnumber: {
    type: String,
    unique: true,
    minLength: 2,
    maxLength: 6,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    minLength: 3,
    maxLength: 10,
    required: true,
  },
});

const QuestionSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
});

const AssignmentSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  assignmentCode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  questions: [QuestionSchema],
  plag: {
    type: Boolean,
    required: true,
  },
});

const AnswerSchema = new mongoose.Schema({
  assignmentCode: {
    type: String,
    required: true,
  },
  studentRollNumber: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  plagarismReport: {
    type: Number,
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
const Student = mongoose.model("Student", StudentSchema);
const Assignment = mongoose.model("Assignment", AssignmentSchema);
const Answers = mongoose.model("Answers", AnswerSchema);

module.exports = {
  Teacher,
  Student,
  Assignment,
  Answers,
};

//teacher - name, subject,password , assign link
//assignment - Teacher code(Index of teacher) ,Assignment code,Assignment title Questions
//student - Student Name,Student roll number,password
//answer-Assignment code, Student name/Usn,Answers,plagarism percent,timestamp
