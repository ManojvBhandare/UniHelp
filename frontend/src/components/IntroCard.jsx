export const IntroCard = ({ Imglink, Heading, bgcolor }) => {
  let bgClass = "bg-black";
  let textColor = "text-white";
  switch (bgcolor) {
    case "yellow":
      bgClass = "bg-[#F2DA00]";
      textColor = "text-black";

      break;
    case "blue":
      bgClass = "bg-[#4A6AF1]";
      textColor = "text-white";
      break;
    // Add more cases as needed
    default:
      bgClass = "bg-black";
      textColor = "text-white"; // Fallback color
  }

  return (
    <div
      className={`md:w-[22rem] md:h-[10rem] w-[16rem] h-[15rem] ${bgClass} ${textColor} rounded-2xl flex justify-center md:flex-row flex-col items-center gap-3 md:p-[1.5rem] p-[1rem]`}
    >
      <div className="bg-white md:w-[7rem] md:h-[7rem] h-[8rem] w-[9rem] rounded-2xl flex justify-center">
        <img
          src={Imglink}
          alt=""
          className="md:w-[5rem] md:h-[7rem] w-[5rem]"
        />
      </div>
      <h1 className="text-[1.6rem]  font-bold">{Heading}</h1>
    </div>
  );
};
