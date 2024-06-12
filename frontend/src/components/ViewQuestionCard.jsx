import React, { useRef } from "react";
import "../index.css";
import { useAnswerStore } from "../stores/useAnswerStore";

export const ViewQuestionCard = ({ questionNumber, questionText }) => {
  const updateAnswer = useAnswerStore((state) => state.updateAnswer);
  const textareaRef = useRef(null);
  const handleChange = (event) => {
    updateAnswer(questionNumber, event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="w-full p-[1rem] flex flex-col gap-3">
      <div className="grid grid-cols-12 gap-3">
        <div className="bg-[#4A69F5] col-span-1 justify-self-center flex justify-center w-full items-center rounded-lg">
          <h1 className="text-white text-[1.5rem]">{questionNumber}</h1>
        </div>
        <div className="col-span-11">
          <h1 className="flex items-center w-full h-[4rem] p-[1.5rem] rounded-lg bg-white text-black text-[1.5rem]">
            {questionText}
          </h1>
        </div>
      </div>
      <div className="answerdiv w-full flex flex-wrap">
        <textarea
          ref={textareaRef}
          type="text"
          onChange={handleChange}
          className="answer-input w-full  rounded-lg p-2 focus:outline-none focus:border-blue-500 border-2 border-white text-[1rem] "
          placeholder="Your Answer Here..."
          rows={2}
        />
      </div>
    </div>
  );
};
