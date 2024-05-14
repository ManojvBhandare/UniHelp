import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-[80%] h-[4rem] md:h-[5rem] mt-[1rem] md:mt-[1rem] p-[1rem] bg-black text-white rounded-xl shadow-md z-50 fixed top-0 left-[10%]">
      <div className="flex">
        <h1 className="logo text-[1.5rem] lg:text-[2rem] font-bold">UniHelp</h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="absolute cursor-pointer md:hidden right-8 top-4"
      >
        {open ? <IoClose size={28} /> : <IoMdMenu size={28} />}
      </div>

      <ul
        className={`md:flex md:items-center md:space-x-8 md:static absolute right-2 md:right-0 text-center bg-white text-black w-[9rem] md:w-auto justify-center md:text-white md:bg-transparent md:flex-row flex-col transition-all duration-500 ease-in-out ${
          open ? "top-[4rem] opacity-100" : "top-[-400px] opacity-0"
        } md:opacity-100`}
      >
        <li className=" md:text-[1rem] text-[0.875rem] my-2 md:my-0">
          For Students
        </li>
        <li className="md:text-[1rem] text-[0.875rem] my-2 md:my-0">
          For Teachers
        </li>
        <li className=" md:text-[1rem] text-[0.875rem] my-2 md:my-0">
          Why UniHelp?
        </li>
        <li>
          <div className="flex bg-white text-black md:h-[2.5rem] md:w-[8rem] justify-center items-center rounded-lg font-medium p-[0.8rem] h-[2rem] my-2 md:my-0">
            Get Started
          </div>
        </li>
      </ul>
    </div>
  );
};
