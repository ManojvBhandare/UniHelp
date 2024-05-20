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
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-4 md:p-8 overflow-x-hidden">
      <div className="flex flex-col md:w-1/3 gap-4 items-center md:items-start md:justify-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
          For Teachers
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
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

      <div className=" relative flex justify-center items-center mt-8 md:mt-0">
        <img
          src={bg}
          alt=""
          className="absolute rotate-[154deg] md:rotate-0 h-32 md:h-56 z-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 z-10 w-full max-w-3xl">
          <FeatureCard
            imgLink={settings}
            Head1={"Ensure Authenticity:"}
            Para1={
              "Utilize UniHelp's plagiarism detection system to ensure the authenticity of student submissions."
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
              "Review and grade student submissions with confidence, knowing that UniHelp promotes academic integrity."
            }
          />
          <FeatureCard
            imgLink={pen2}
            Head1={"Provide Feedback:"}
            Para1={
              "Give detailed feedback to students, helping them improve their work."
            }
          />
        </div>
      </div>
    </div>
  );
};
