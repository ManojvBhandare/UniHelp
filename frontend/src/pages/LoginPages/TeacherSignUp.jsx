import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const TeacherSignUp = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mail || !username || !password || !subject) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/unihelp/teacher/signup",
        {
          mailId: mail,
          username: username,
          password: password,
          subject: subject,
        }
      );
      // Assuming the server returns a token upon successful signup
      localStorage.setItem("token", response.data.token);
      navigate("/teacher/dashboard");
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      // Expanded error handling to catch more generic server errors
      if (error.response && error.response.status === 411) {
        setError(error.response.data.message);
      } else {
        setError(`An error occurred: ${error.message}`);
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#F2F2F2] w-[95%] sm:w-3/4 md:w-[25%] h-auto md:h-[65%] rounded-xl flex flex-col justify-center items-center gap-6 border-solid border-black border-2 p-4 md:p-5 md:pt-10 ">
        <h1
          className="font-bold text-2xl md:text-3xl lg:text-4xl"
          aria-label="Sign Up Title"
        >
          Sign Up
        </h1>
        <div className="grid grid-rows-5 grid-cols-1 justify-items-center gap-2 w-[90%]  p-5">
          <input
            type="email"
            placeholder="Enter your Mail"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the UserName"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter the password"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the Subject"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setSubject(e.target.value)}
          />
          <p className="text-red-500">{error}</p>
          <button
            className="w-full md:w-3/4 lg:w-2/3 bg-black text-white rounded-lg font-medium py-2 md:py-3 lg:py-4"
            onClick={handleSubmit}
            aria-label="Submit Signup Form"
          >
            Sign Up
          </button>
        </div>
        <div className="flex mt-2 md:-mt-8 text-sm">
          <p className="">Already have an account?</p>
          <Link
            className="pointer underline pl-1 text-blue-800 cursor-pointer"
            to="/teacher/signin"
            aria-label="Go to Sign In Page"
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};
