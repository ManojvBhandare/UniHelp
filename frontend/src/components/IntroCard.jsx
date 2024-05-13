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
      className={`w-[22rem] h-[10rem] ${bgClass} ${textColor} rounded-2xl flex justify-center items-center gap-3 p-[1.5rem]`}
    >
      <div className="bg-white w-[7rem] h-[7rem] rounded-2xl flex justify-center">
        <img src={Imglink} alt="" className="w-[5rem] h-[7rem]" />
      </div>
      <h1 className="text-[1.6rem] font-bold">{Heading}</h1>
    </div>
  );
};
