import { IntroCard } from "../components/IntroCard";

export const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="flex flex-col items-center justify-center bg-[#F5F4F4] w-[90%] h-[95%] rounded-2xl">
        <div className="flex px-[12rem]">
          <img src="book.svg" alt="Book Photo" />
          <h1 className="text-[3.9rem] font-bold text-center">
            Where Teachers and Students Meet Integrity
          </h1>
          <img src="pen 1.svg" alt="Book Photo" />
        </div>
        <div className="px-[12rem] pt-[2rem]">
          <p className="text-[1.4rem] text-center">
            UniHelp is where teachers and students unite for authentic learning
            experiences. We promote academic integrity by providing a platform
            where teachers can assign work and students can submit assignments
            confidently, knowing that their originality is protected. Join us in
            fostering genuine learning and academic honesty.
          </p>
        </div>
        <div className="flex justify-center items-center h-[4rem] w-[14rem] bg-[#E0E01E] rounded-3xl mt-[1.2rem]">
          <h1 className="text-[1.4rem] font-bold">Get Started</h1>
        </div>
        <div className="pt-[2rem] flex gap-10">
          <IntroCard
            Imglink={"Teachers.svg"}
            Heading={"For Teachers"}
            bgcolor={"blue"}
          />
          <IntroCard Imglink={"student.svg"} Heading={"For Students"} />
          <div
            className={`w-[22rem] h-[10rem] rounded-2xl flex justify-center items-center gap-3 p-[1.5rem] bg-[#E0E01E]`}
          >
            <h1 className="text-[1.6rem] font-bold">Why UniHelp?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
