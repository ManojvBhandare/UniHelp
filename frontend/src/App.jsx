import "./App.css";
import { ForTeachers } from "./pages/ForTeachers";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./pages/NavBar";

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar />
      <HomePage />
      <ForTeachers />
    </div>
  );
}

export default App;
