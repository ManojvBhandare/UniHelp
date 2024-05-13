export const NavBar = () => {
  return (
    <div className="flex items-center justify-center gap-[50.5rem]  py-[1.8rem]">
      <div className="flex items-end">
        <h1 className="logo text-[2.125rem] font-bold ">UniHelp</h1>
      </div>
      <div className="flex text-[1.3rem] justify-end gap-[4rem] items-center">
        <h1>For Students</h1>
        <h1>For Teachers</h1>
        <h1>Why Unihelp?</h1>
        <div className="flex bg-black text-white h-[3.5rem] w-[10rem] justify-center items-center rounded-lg font-medium p-[1.2rem]">
          <h1>Get Started</h1>
        </div>
      </div>
    </div>
  );
};
