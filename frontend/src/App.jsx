import "./App.css";
import { ForStudents } from "./pages/ForStudents";
import { ForTeachers } from "./pages/ForTeachers";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./pages/NavBar";
import { WhyUnihelp } from "./pages/WhyUnihelp";
function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar />
      <div className="md:pt-[4rem] pt-[6rem]">
        <HomePage />
        <ForTeachers />
        <ForStudents />
        <WhyUnihelp />
      </div>
    </div>
  );
}

export default App;
