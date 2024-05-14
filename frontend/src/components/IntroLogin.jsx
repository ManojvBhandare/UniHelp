export const IntroLogin = ({ imgLink }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <img src={imgLink} alt="" className="md:object-left-top w-[4rem]" />
      <div className="bg-black text-white md:w-[14rem] md:h-[4rem] w-[12rem] h-[3rem] rounded-2xl flex justify-center items-center">
        <h1 className="md:text-[1.5rem] text-[1rem]">Login</h1>
      </div>
    </div>
  );
};
