import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AnswerScreen from "./pages/AnswerScreen";
import { AssignmentEntry } from "./pages/AssignmentEntry";
import { CreateAssignments } from "./pages/CreateAssignment";
import { LandingPage } from "./pages/LandingPages/LandingPage";
import { StudentSignIn } from "./pages/LoginPages/StudentSignIn";
import { StudentSignUp } from "./pages/LoginPages/StudentSignUp";
import { TeacherSignIn } from "./pages/LoginPages/TeacherSignIn";
import { TeacherSignUp } from "./pages/LoginPages/TeacherSignUp";
import { TeacherDashboard } from "./pages/TeacherDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/student/*" element={<StudentRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StudentSignUp />} />
      <Route path="signin" element={<StudentSignIn />} />
      <Route path="signup" element={<StudentSignUp />} />
      <Route path="entry" element={<AssignmentEntry />} />
      <Route path="answer" element={<AnswerScreen />} />
    </Routes>
  );
}

function TeacherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TeacherSignUp />} />
      <Route path="signup" element={<TeacherSignUp />} />
      <Route path="signin" element={<TeacherSignIn />} />
      <Route path="dashboard" element={<TeacherDashboard />} />
      <Route path="createassignment" element={<CreateAssignments />} />
    </Routes>
  );
}

export default App;
