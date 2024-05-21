import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AnswerScreen() {
  const query = useQuery();
  const assignmentCode = query.get("code");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

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
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#D6DDFC] w-[95%] h-[95%] rounded-xl p-[1rem] flex flex-col gap-8 justify-start items-center">
        <div className="bg-white p-2 rounded-lg flex justify-start">
          <h1>time</h1>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {response && (
          <div className="bg-white p-2 rounded-lg flex justify-start">
            <h2>{response.assignment.title}</h2>
            <p>{response.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnswerScreen;
