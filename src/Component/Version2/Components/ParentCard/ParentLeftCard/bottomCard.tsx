import React from "react";

const BottomCard = () => {
  return (
    <div className="shadow-2xl border-0 h-1/3 bg-gradient-to-b from-[#7284FF] to-[#8794EA] rounded-3xl">
      <div className="text-white flex flex-row p-5 items-center justify-around">
        <div className="flex flex-col">
          <div className="pb-2 font-semibold">Monthly Rainfall</div>
          <div className="font-bold">45mm</div>
        </div>
        <div className="flex flex-col">
          <div className="pb-2 font-semibold">This Year</div>
          <div className="text-[#69DE83] font-bold text-lg">+ 17%</div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
