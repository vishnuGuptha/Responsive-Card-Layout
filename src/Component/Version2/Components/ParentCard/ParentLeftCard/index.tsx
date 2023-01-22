import React from "react";
import BottomCard from "./bottomCard";
import TopCard from "./topCard";

const ParentLeftCard = () => {
  return (
    <div className="w-1/3 border-0 flex flex-col h-full gap-10">
      <TopCard />
      <BottomCard />
    </div>
  );
};

export default ParentLeftCard;
