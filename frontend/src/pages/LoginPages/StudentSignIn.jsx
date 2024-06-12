import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentSignIn = () => {
  const [mail, setMail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mail || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/unihelp/student/signin",
        {
          mailId: mail,
          password: password,
        }
      );
      localStorage.setItem("User", "student");
      localStorage.setItem("token", response.data.token);
      navigate("/student/entry");
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      localStorage.setItem("User", null);
      if (error.response && error.response.status === 411) {
        setError(error.response.data.message);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#F2F2F2] w-[95%] sm:w-3/4 md:w-[25%] h-auto md:h-[65%] rounded-xl flex flex-col justify-center items-center gap-6 border-solid border-black border-2 p-4 md:p-5 md:pt-10 ">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Sign In</h1>
        <div
          action="submit"
          className="grid grid-rows-3 grid-cols-1 justify-items-center gap-2 w-[90%]  p-5"
        >
          <input
            type="text"
            placeholder="Enter your Mail"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="password" // Changed to password type for security
            placeholder="Enter the password"
            className="w-full p-2 md:p-3  border-solid border-black border-[1px] rounded-lg h-12"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500">{error}</p>

          <button
            className="w-full md:w-3/4 lg:w-2/3 bg-black text-white rounded-lg font-medium py-2 md:py-3 lg:py-4  "
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
