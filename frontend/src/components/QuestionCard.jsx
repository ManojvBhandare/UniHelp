import { MdDelete } from "react-icons/md";

export const QuestionCard = ({ onDelete, questionNumber, text, onEdit }) => {
  return (
    <div className="grid grid-cols-12 gap-3 ">
      <div className=" bg-[#4A69F5] col-span-1  justify-self-center flex justify-center w-[80%] items-center rounded-lg">
        <h1 className="text-white text-[1.5rem]">{questionNumber}</h1>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          placeholder="Question Here"
          className="w-full h-[5rem] p-[2rem] rounded-lg focus:outline-none focus:border-blue-500 border-2 border-white text-[1.5rem]"
          onChange={(e) => onEdit(e.target.value)}
          value={text}
        />
      </div>
      <div
        className="bg-red-500 col-span-1 justify-self-center w-[80%] flex justify-center items-center rounded-lg"
        onClick={onDelete}
      >
        <h1 className="text-white text-[1.5rem]">
          <MdDelete className="w-[2rem]" />
        </h1>
      </div>
    </div>
  );
};
