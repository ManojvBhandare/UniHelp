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
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:p-20 p-4">
      <div className="flex flex-col p-4 md:w-1/2 gap-6 items-center md:items-start md:justify-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
          For Teachers
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center md:text-left">
          UniHelp empowers teachers to create assignments and set plagiarism
          check percentages, ensuring academic integrity while simplifying the
          assignment process. Join us in fostering genuine learning experiences
          for your students.
        </p>
        <div className="flex flex-col items-center justify-center md:justify-start">
          <Link className="cursor-pointer" to="/teacher/signup">
            <IntroLogin imgLink={teacher2} />
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 md:p-4 relative z-10 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={bg}
          alt=""
          className="absolute rotate-[154deg] md:rotate-0 h-56 md:h-full z-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          <FeatureCard
            imgLink={pen2}
            Head1={"Create Assignments:"}
            Para1={
              "Easily create assignments with specific instructions and set desired plagiarism check percentages"
            }
            className="w-full h-40 sm:h-48 md:h-48 lg:h-64"
          />
          <FeatureCard
            imgLink={cloud}
            Head1={"Distribute to Students:"}
            Para1={
              "Distribute assignments to your students with unique assignment codes."
            }
            className="h-30 sm:h-48 md:h-48 lg:h-48"
          />
          <FeatureCard
            imgLink={check}
            Head1={"Review and Grade:"}
            Para1={
              "Review and grade student submissions with confidence, knowing that UniHelp promotes academic integrity"
            }
            className="w-full h-40 sm:h-48 md:h-48 lg:h-64"
          />
          <FeatureCard
            imgLink={settings}
            Head1={"Ensure Authenticity:"}
            Para1={
              "Utilize UniHelp's plagiarism detection system to ensure the authenticity of student submissions."
            }
            className="w-full h-40 sm:h-48 md:h-48 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};
