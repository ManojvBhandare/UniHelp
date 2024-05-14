export const FeatureCard = ({ imgLink, Head1, Para1 }) => {
  return (
    <div className="md:w-[21rem] md:h-[18rem] w-[18rem] rounded-xl p-[1rem] shadow-2xl bg-white">
      <div className="bg-[#D6DDFC] w-[4rem] h-[4rem] flex justify-center items-center rounded-xl">
        <img src={imgLink} alt="" />
      </div>
      <div className="gap-[1rem] space-y-5 pt-[1.5rem]">
        <h1 className="font-semibold md:text-[1.5rem]">{Head1}</h1>
        <p className="text-[1rem]">{Para1}</p>
      </div>
    </div>
  );
};
