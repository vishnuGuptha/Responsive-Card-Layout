import React from "react";

const FixedCard = () => {
  return (
    <div className="rounded-lg flex flex-col bg-slate-300 max-w-full aspect-[1/1] bg-pink shadow-lg">
      <div className="flex flex-col h-full">
        <div className="bg-neutral-700 rounded-t-lg w-full h-10 flex items-center pr-5 text-white justify-center">
          Header
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div>Content / Graph</div>
        </div>
        <div className="bg-neutral-700 rounded-b-lg w-full h-10 flex items-center justify-end pr-5 text-white">
          Footer
        </div>
      </div>
    </div>
  );
};

export default FixedCard;
