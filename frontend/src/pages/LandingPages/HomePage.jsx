import Teachers from "../../assets/Teachers.svg";
import book from "../../assets/book.svg";
import pen from "../../assets/pen 1.svg";
import student from "../../assets/student.svg";
import { IntroCard } from "../../components/IntroCard";

export const HomePage = ({ scrollToSection, refs }) => {
  return (
    <div className="min-h-screen flex items-center justify-center md:pt-16 lg:-mt-12">
      <div className="flex flex-col items-center justify-center bg-[#F5F4F4] w-[90%] md:w-[90%] lg:w-[90%] overflow-auto md:p-[5rem] py-[1.2rem] rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-[1rem] md:px-[6rem] space-y-4 md:space-y-0">
          <img
            src={book}
            alt="Book Photo"
            className="hidden md:block w-12 h-12 md:w-auto md:h-auto"
          />
          <h1 className="text-[2rem] md:text-[2rem] lg:text-[3.5rem] font-bold text-center md:mx-4">
            Where Teachers and Students Meet Integrity
          </h1>
          <img
            src={pen}
            alt="Pen Photo"
            className="hidden md:block w-12 h-12 md:w-auto md:h-auto"
          />
        </div>
        <div className="px-[1rem] md:px-[6rem] pt-[1rem] md:pt-[2rem]">
          <p className="text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] text-center">
            UniHelp is where teachers and students unite for authentic learning
            experiences. We promote academic integrity by providing a platform
            where teachers can assign work and students can submit assignments
            confidently, knowing that their originality is protected. Join us in
            fostering genuine learning and academic honesty.
          </p>
        </div>
        <div className="flex justify-center items-center h-[2.5rem] w-[8rem] md:h-[3rem] md:w-[10rem] lg:w-[12rem] bg-[#E0E01E] rounded-3xl mt-[1.2rem]">
          <h1 className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] font-bold">
            Get Started
          </h1>
        </div>
        <div className="pt-[2rem] flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          <IntroCard
            Imglink={Teachers}
            Heading={"For Teachers"}
            bgcolor={"blue"}
            goto={refs.teachersRef}
            scrollToSection={scrollToSection}
          />
          <IntroCard
            Imglink={student}
            Heading={"For Students"}
            goto={refs.studentsRef}
            scrollToSection={scrollToSection}
          />
          <div
            className="w-[16rem] md:w-[18rem] h-[6rem] md:h-[8rem] lg:h-[10rem] rounded-2xl flex justify-center items-center gap-3 p-[1rem] bg-[#E0E01E] cursor-pointer"
            onClick={() => scrollToSection(refs.whyUnihelpRef)}
          >
            <h1 className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-bold text-center">
              Why UniHelp?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
