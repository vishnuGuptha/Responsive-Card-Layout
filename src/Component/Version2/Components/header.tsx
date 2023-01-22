import React from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex flex-row justify-between h-20 items-center w-full px-2">
      <div className="text-4xl font-extrabold text-[#7284ff] w-1/2 text-left">
        Rayn
      </div>
      <div className="flex flex-row w-1/2 justify-end items-center gap-2">
        <div className="whitespace-nowrap border placeholder">
          <input
            type="text"
            name="city"
            id="cityName"
            className="rounded-lg border-0 active:border-2 h-10 focus:outline-[#7284ff] p-2 font-semibold"
            placeholder="Enter city name.."
          />
        </div>
        <div className="text-4xl font-bold text-[#7284ff] pl-10">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
