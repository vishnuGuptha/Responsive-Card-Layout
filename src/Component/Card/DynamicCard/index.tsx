import React from "react";

const DynamicCard = () => {
  return (
    <div className="rounded-lg flex flex-col aspect-[1/1] bg-slate-300 md:max-w-[773px] md:w-[calc(50%-10px)] lg:w-[calc(32%-10px)] xl:w-[calc(25%-20px)]">
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

export default DynamicCard;
