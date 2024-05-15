export const CreateAssignments = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-[#D6DDFC] w-[95%] h-[90%] rounded-xl p-[1rem] flex flex-col gap-10">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Assignment title"
            className="rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:border-2"
          />
          <input
            type="text"
            placeholder="Enter Assignment code"
            className="rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:border-2"
          />
        </div>
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <div>
                {" "}
                <h1>1</h1>
              </div>
              <input
                type="text"
                placeholder="Question Here"
                className="h-[5rem] p-[2rem] rounded-lg focus:outline-none focus:border-blue-500 focus:border-2 text-[1.5rem]"
              />
            </div>
            <input
              type="text"
              placeholder="Question Here"
              className="h-[5rem] p-[2rem] rounded-lg focus:outline-none focus:border-blue-500 focus:border-2 text-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
