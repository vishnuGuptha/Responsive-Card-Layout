import React from "react";
import { BsSun } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="shadow-2xl w-full h-[380px] bg-cover bg-top bg-no-repeat rounded-2xl mt-2 bg-[url('https://img.freepik.com/free-vector/mountain-lake-sunset-landscape-realistic-tree-forest-mountain-silhouettes-evening-wood-panorama-illustration-wild-nature-background_1150-39419.jpg?w=1060&t=st=1672741403~exp=1672742003~hmac=639a7ac233dd3add42330efc45e52edf39efbec8e99b7614353f62a2226e9af6')] bg-blend-darken">
      <div className="text-white flex flex-col items-start p-10 h-full w-full justify-end">
        <div className="text-2xl pb-2">
          <BsSun />
        </div>
        <div className="text-5xl font-light pb-2">32°C</div>
        <div className="flex flex-row w-full justify-between">
          <div className="text-xl font-semibold">New York, US</div>
          <div className="text-xl font-light">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(Date.now())}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
