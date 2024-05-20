const mongoose = require("mongoose");
require("dotenv").config();

// Load environment variables
const mongoUrl = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("Connection error", err));

// Define Schemas
const TeacherSchema = new mongoose.Schema({
  mailId: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
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
    unique: true,
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
  question_Id: {
    type: String,
    required: false,
  },
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
    unique: true,
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  questions: [
    {
      type: QuestionSchema,
    },
  ],
  plag: {
    type: Boolean,
    required: true,
  },
  deadline: {
    type: Date,
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
        type: String,
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
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Create Models
const Teacher = mongoose.model("Teacher", TeacherSchema);
const Student = mongoose.model("Student", StudentSchema);
const Assignment = mongoose.model("Assignment", AssignmentSchema);
const Answers = mongoose.model("Answers", AnswerSchema);

// Export Models
module.exports = {
  Teacher,
  Student,
  Assignment,
  Answers,
};
