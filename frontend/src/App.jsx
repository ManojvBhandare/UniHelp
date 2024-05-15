import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { CreateAssignments } from "./pages/CreateAssignment";
import { LandingPage } from "./pages/LandingPages/LandingPage";
import { TeacherSignIn } from "./pages/LoginPages/TeacherSignIn";
import { TeacherSignUp } from "./pages/LoginPages/TeacherSignUp";
import { TeacherDashboard } from "./pages/TeacherDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
      </Routes>
    </BrowserRouter>
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
