import { Link } from "react-router-dom";
import bg from "../../assets/Bg-yellow.svg";
import cloud from "../../assets/Upload.svg";
import check from "../../assets/check.svg";
import pen2 from "../../assets/pen2.svg";
import settings from "../../assets/settings.svg";
import teacher2 from "../../assets/teacher2.svg";
import { FeatureCard } from "../../components/FeatureCard";
import { IntroLogin } from "../../components/IntroLogin";
export const ForTeachers = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:p-[5rem] p-[1rem]">
      <div className="flex flex-col p-4 md:w-1/2 gap-6 md:items-start md:justify-center">
        <h1 className="font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
          For Teachers
        </h1>
        <p className="text-sm md:text-base">
          UniHelp empowers teachers to create assignments and set plagiarism
          check percentages, ensuring academic integrity while simplifying the
          assignment process. Join us in fostering genuine learning experiences
          for your students.
        </p>
        {/* Center the login button vertically */}
        <div className="flex flex-col items-center justify-center md:justify-center">
          <Link className=" cursor-pointer" to="/teacher/signup">
            <IntroLogin imgLink={teacher2} />
          </Link>
        </div>
      </div>

      <div className="md:w-[50%] md:p-4 -mt-24 md:mt-0 relative z-10 md:flex justify-center grid grid-flow-row justify-items-center">
        <img
          src={bg}
          alt=""
          className="md:absolute md:z-0 z-10 rotate-[154deg] md:rotate-0 h-[14rem] md:h-full"
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
          <FeatureCard
            imgLink={check}
            Head1={"Review and Grade:"}
            Para1={
              "Review and grade student submissions with confidence, knowing that UniHelp promotes academic integrity"
            }
          />
          <FeatureCard
            imgLink={settings}
            Head1={"Ensure Authenticity:"}
            Para1={
              "Utilize UniHelp's plagiarism detection system to ensure the authenticity of student submissions."
            }
          />
        </div>

        {/* Background Image */}
      </div>
    </div>
  );
};
