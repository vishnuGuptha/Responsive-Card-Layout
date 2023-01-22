import React from "react";

import { IoWaterOutline } from "react-icons/io5";
import { BsSunrise, BsSunset, BsSun } from "react-icons/bs";
const TopCard = () => {
  return (
    <div className="shadow-2xl h-2/3 border-0 bg-[#ffffff] rounded-3xl flex flex-row gap-2 justify-around items-center p-4">
      <div className="flex flex-col gap-7">
        <div className="flex flex-row items-center justify-start">
          <div className="text-[#7284ff] p-2">
            <IoWaterOutline fontSize={40} />
          </div>
          <div className="flex flex-col items-start">
            <div>Humidity</div>
            <div className="font-bold text-left">39%</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start">
          <div className="text-[#7284ff] p-2">
            <BsSun fontSize={40} />
          </div>
          <div className="flex flex-col items-start">
            <div>UV Index</div>
            <div className="font-bold text-left">0 of 10</div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200">
        <hr className="rotate-90 rounded-lg w-[2px] h-24" />
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-row items-center justify-start">
          <div className="text-[#7284ff] p-2">
            <BsSunrise fontSize={40} />
          </div>
          <div className="flex flex-col items-start">
            <div>Sunrise</div>
            <div className="font-bold text-left">6:30 am</div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start">
          <div className="text-[#7284ff] p-2">
            <BsSunset fontSize={40} />
          </div>
          <div className="flex flex-col items-start ">
            <div>Sunset</div>
            <div className="font-bold text-left">6:35 pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
