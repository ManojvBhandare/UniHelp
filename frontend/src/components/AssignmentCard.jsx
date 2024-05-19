import React, { useState } from "react";

function AssignmentCard({ title, code }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const cardRect = e.target.getBoundingClientRect();
    setShowTooltip(true);
    setTooltipPosition({
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top,
    });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative h-[6rem] shadow-md rounded-2xl flex justify-start items-center bg-white p-[1rem] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#D6DDFC] w-[15%] min-w-[15%] h-[75%] rounded-lg  flex justify-center items-center">
        <h1 className="text-[1.5rem] text-[#4A69F5]">{title[0]}</h1>
      </div>
      <div className="p-[1rem] w-[90%]">
        <h1 className="assignment-title text-[1.2rem] font-semibold max-w-full overflow-hidden whitespace-nowrap truncate">
          {title}
        </h1>
        <h2>{code}</h2>
        {showTooltip && (
          <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-lg text-xs z-40">
            {title}
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignmentCard;
