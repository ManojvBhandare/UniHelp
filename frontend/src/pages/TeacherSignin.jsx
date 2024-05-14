export const TeacherSignin = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#F2F2F2] w-[30%] h-[60%] rounded-xl flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold text-[2.5rem]">Sign Up</h1>
        <form
          action="submit"
          className="flex flex-col justify-center items-center gap-5"
        >
          <input
            type="text"
            placeholder="Enter your Mail"
            className="h-[3rem] p-[1.5rem] w-[85%]"
          />
          <input
            type="text"
            placeholder="Enter the UserName"
            className="h-[3rem] p-[1.5rem] w-[85%]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter the password"
            className="h-[3rem] p-[1.5rem] w-[85%]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter the Subject"
            className="h-[3rem] p-[1.5rem] w-[85%]"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};
