import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pen from "../assets/pen2.svg";
import AssignmentCard from "../components/AssignmentCard";

export const TeacherDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [noassignments, setNoAssignments] = useState(true);
  const [errors, setError] = useState("");
  const isLogged = localStorage.getItem("User");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/unihelp/assignment/view",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.assignments.length === 0) {
          setAssignments([]);
          setNoAssignments(true);
        } else {
          setAssignments(response.data.assignments);
          setNoAssignments(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setError(error.response.data.message);
          setAssignments([]);
          setNoAssignments(true);
        } else {
          console.error("Error fetching assignments:", error);
        }
      }
    };

    fetchData();
  }, []);

  return isLogged === "teacher" ? (
    <div className="h-screen w-screen">
      <div className="p-[2rem] h-full flex flex-col gap-2">
        <h1 className="text-[3rem] font-bold">Your Dashboard</h1>
        <div className="flex gap-5 cursor-pointer">
          <DashboardCard img={pen} title={"Create Assignment:"} />
        </div>
        <div className="bg-[#D6DDFC] w-full h-[80%] rounded-xl p-[1.5rem] flex flex-col gap-6 relative mt-2">
          <h1 className="font-bold text-[1.8rem]  fixed">Your Assignments</h1>
          <div className="overflow-y-auto max-h-[80vh] mt-[4rem]">
            <div className="grid grid-cols-4 justify-items-center gap-4 w-[90%]">
              {!noassignments ? (
                assignments.map((assignment) => (
                  <AssignmentCard
                    key={assignment._id}
                    title={assignment.title}
                    code={assignment.assignmentCode}
                  />
                ))
              ) : (
                <div className="col-span-4 w-full h-full flex justify-center items-center">
                  <h1 className="font-light text-[1rem] text-red-500">
                    {errors}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>You are not authorized to view this page</div>
  );
};

function DashboardCard({ title, img }) {
  const navigate = useNavigate();
  function handleClick() {
    console.log("clicked");
    navigate("/teacher/createassignment");
  }
  return (
    <div
      className="cursor-pointer w-[23rem] h-[6rem] shadow-md shadow-blue-500 rounded-2xl flex justify-start items-center pl-[1rem] gap-4"
      onClick={handleClick}
    >
      <div className="bg-[#D6DDFC] w-[20%] h-[75%] rounded-xl p-[1rem]">
        <img src={img} alt="pen" className="" />
      </div>
      <h1 className="text-[1.5rem] font-semibold">{title}</h1>
    </div>
  );
}
