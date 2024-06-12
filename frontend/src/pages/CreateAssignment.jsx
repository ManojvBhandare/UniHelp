import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import { QuestionCard } from "../components/QuestionCard";

export const CreateAssignments = () => {
  const [questions, setQuestions] = useState([]);
  const [assignmenttitle, setAssignmenttitle] = useState("");
  const [assCode, setAsscode] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [deadLine, setDeadLine] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isValidCode, setIsValidCode] = useState(false);
  const navigate = useNavigate();
  function handlePlus() {
    const newQuestion = {
      id: uuidv4(),
      questionNumber: questions.length + 1,
      questionText: "",
    };
    setQuestions([...questions, newQuestion]);
  }

  function handleDelete(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    const reindexedQuestions = updatedQuestions.map((question, index) => ({
      ...question,
      questionNumber: index + 1,
    }));
    setQuestions(reindexedQuestions);
  }

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  function handleEdit(id, newText) {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, questionText: newText } : question
    );
    setQuestions(updatedQuestions);
  }

  async function handleAssign() {
    if (!isValidTitle || !isValidCode) {
      return; // Exit early if either field is invalid
    }

    if (questions.length === 0) {
      alert("No questions were added.");
      return; // Exit early if no questions are present
    } else {
      const formattedQuestions = questions.map(
        ({ id, questionNumber, questionText }) => ({
          question_id: id,
          questionNumber: questionNumber,
          questionText: questionText,
        })
      );
      try {
        const response = await axios.post(
          "http://localhost:3000/unihelp/assignment/create",
          {
            assignmentCode: assCode,
            title: assignmenttitle,
            questions: formattedQuestions,
            plag: isOn,
            deadline: deadLine,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data.message);
      } catch (error) {
        console.log(error);
      }
    }

    navigate("/teacher/dashboard");
    // Placeholder for sending data to the backend
    // Replace with your actual API call
    // sendDataToBackend(formattedQuestions, assCode, assignmenttitle, deadLine, isOn, deadLine);
  }

  const isLogged = localStorage.getItem("isLogged");

  return isLogged === "teacher" ? (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#D6DDFC] w-[95%] h-[95%] rounded-xl p-[1rem] flex flex-col gap-8 justify-start items-center">
        <div className="flex justify-between w-full">
          <input
            type="text"
            placeholder="Enter Assignment title"
            className="rounded-lg p-2 focus:outline-none focus:border-blue-500 border-2 border-white"
            onChange={(e) => {
              setAssignmenttitle(e.target.value);
              setIsValidTitle(true);
            }}
          />
          <input
            type="text"
            placeholder="Enter Assignment code"
            className="rounded-lg p-2 focus:outline-none focus:border-blue-500 border-2 border-white"
            onChange={(e) => {
              setAsscode(e.target.value);
              setIsValidCode(true);
            }}
          />
        </div>
        <div
          className="error-message"
          style={{ display: !isValidTitle || !isValidCode ? "" : "none" }}
        >
          Please fill out both the assignment title and code.
        </div>
        <div className="overflow-y-auto gap-4 grid grid-flow-row w-full">
          {questions.map(({ id, questionNumber, questionText }) => (
            <QuestionCard
              key={id}
              questionNumber={questionNumber}
              text={questionText}
              onDelete={() => handleDelete(id)}
              onEdit={(newText) => handleEdit(id, newText)}
            />
          ))}
        </div>
        <div
          className="w-[5rem] min-h-[5rem] bg-white rounded-full flex justify-center items-center text-[3rem] text-[#4A69F5] cursor-pointer"
          onClick={handlePlus}
        >
          <FaPlus className="w-[2rem]" />
        </div>
        <div className="flex gap-4 self-end absolute bottom-10">
          <div className="flex items-center bg-white p-2 rounded-xl">
            <div className="bg-[#D6DDFC] rounded-xl px-4 py-2">
              <input
                type="date"
                className="bg-transparent text-black font-semibold outline-none"
                onChange={(e) => setDeadLine(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-xl">
            <div className="bg-[#D6DDFC] rounded-xl px-4 py-2">
              <span className="text-black font-semibold">Plagiarism</span>
            </div>
            <div
              className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out ${
                isOn ? "bg-blue-500" : "bg-gray-300"
              } rounded-full cursor-pointer ml-2`}
              onClick={handleToggle}
            >
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out transform ${
                  isOn ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
          <button
            className="text-black font-semibold flex items-center space-x-2 bg-white p-2 rounded-xl"
            onClick={handleAssign}
          >
            <div className="bg-[#D6DDFC] rounded-xl px-4 py-2">
              <h1>Assign</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>You are not authorized to view this page</div>
  );
};
