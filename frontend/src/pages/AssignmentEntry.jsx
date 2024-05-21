import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AssignmentEntry = () => {
  const isLogged = localStorage.getItem("User");
  const [assignmentcode, setAssignmentcode] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/unihelp/assignment/Sview/${assignmentcode}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/student/answer?code=${assignmentcode}`);
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setError(err.response.data.message);
      } else if (err.response && err.response.status === 404) {
        setError(err.response.data.message);
      }
    }
  };

  return isLogged === "student" ? (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <div className="flex flex-col gap-5">
        <div>
          <input
            type="text"
            placeholder="Enter Assignment Code"
            value={assignmentcode}
            onChange={(e) => setAssignmentcode(e.target.value)}
            className="text-xl h-[5rem] p-5 rounded-2xl border-black border-2"
          />
        </div>{" "}
        <div
          className="bg-black text-white p-[2rem] rounded-2xl text-center font-semibold cursor-pointer"
          onClick={handleSubmit}
        >
          <h1 className="text-xl">Start Answering</h1>
        </div>
      </div>
      {Error && <p className="text-red-500">{Error}</p>}
    </div>
  ) : (
    <div>You are not authorized to acess this page</div>
  );
};
