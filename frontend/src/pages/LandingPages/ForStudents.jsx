import bg from "../../assets/Bg-blue.svg";
import cloud from "../../assets/Upload.svg";
import check from "../../assets/check.svg";
import pen2 from "../../assets/pen2.svg";
import student from "../../assets/student copy.svg";
import { FeatureCard } from "../../components/FeatureCard.jsx";
import { IntroLogin } from "../../components/IntroLogin";

export const ForStudents = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:p-[5rem] p-[1rem]">
      <div className="flex flex-col p-4 md:w-1/2 gap-6 md:items-start md:justify-center">
        <h1 className="font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
          For Students
        </h1>
        <p className="text-sm md:text-base">
          UniHelp provides students with a user-friendly platform to access
          assignments, complete them online, and submit their work confidently.
          With UniHelp's plagiarism detection system, you can be sure that your
          submissions are original and authentic. Join us in promoting academic
          integrity and fostering genuine learning experiences."
        </p>

        <div className="flex flex-col items-center justify-center md:justify-center">
          <IntroLogin imgLink={student} />
        </div>
      </div>
      <div className="md:w-[50%] md:p-4 -mt-24 md:mt-0 relative z-10 md:flex justify-center grid grid-flow-row justify-items-center items-center">
        <img
          src={bg}
          alt=""
          className="md:absolute md:z-0 z-10  h-[14rem] md:h-full w-[18rem] md:w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 -mt-10 md:mt-0">
          <FeatureCard
            imgLink={pen2}
            Head1={"Create Assignments:"}
            Para1={
              "Easily create assignments with specific instructions and set desired plagiarism check percentages"
            }
          />
          <FeatureCard
            imgLink={cloud}
            Head1={"Distribute to Students:"}
            Para1={
              "Distribute assignments to your students with unique assignment codes."
            }
          />
          <div className="md:col-span-2 justify-self-center">
            <FeatureCard
              imgLink={check}
              Head1={"Review and Grade:"}
              Para1={
                "Review and grade student submissions with confidence, knowing that UniHelp promotes academic integrity"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
