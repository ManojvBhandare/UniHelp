import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ViewQuestionCard } from "../components/ViewQuestionCard";
import { useAnswerStore } from "../stores/useAnswerStore";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AnswerScreen() {
  const query = useQuery();
  const assignmentCode = query.get("code");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const answers = useAnswerStore((state) => state.answers);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/unihelp/assignment/Sview/${assignmentCode}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setResponse(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response && err.response.status === 500) {
          setError(err.response.data.message);
        } else if (err.response && err.response.status === 404) {
          setError(err.response.data.message);
        } else {
          setError("An unexpected error occurred.");
        }
      }
    };

    fetchAssignment();
  }, [assignmentCode]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  };

  const handleSubmit = async () => {
    if (answers.length === 0) {
      setError("Please answer all questions");
      return;
    }

    const payload = {
      assignmentCode: assignmentCode,
      answers: answers,
      plagiarismReport: 90,
      time: new Date().toISOString(),
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await axios.post(
        "http://localhost:3000/unihelp/answer/postanswer",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error submitting answers:", err);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#D6DDFC] w-[95%] h-[95%] rounded-xl p-[1rem] flex flex-col gap-8 justify-start items-center">
        <div className="flex justify-between w-full">
          <div className="bg-white p-2 rounded-lg flex justify-start min-w-fit font-semibold">
            <h1>
              {response && response.assignment.deadline
                ? formatDate(response.assignment.deadline)
                : "Loading..."}
            </h1>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {response && (
            <div className="bg-white p-2 rounded-lg flex justify-start">
              <h2>{response.assignment.title}</h2>
            </div>
          )}
        </div>
        <div className="w-full">
          {response &&
            response.assignment.questions.map((question) => (
              <ViewQuestionCard
                questionNumber={question.questionNumber}
                questionText={question.questionText}
                key={question._id}
              />
            ))}
        </div>
        <button
          onClick={handleSubmit}
          className=" absolute bottom-10 self-end m-4 bg-black text-white rounded-lg font-medium py-2 px-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AnswerScreen;
