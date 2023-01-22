import React from "react";
import ParentLeftCard from "./ParentLeftCard";
import ParentRightCard from "./ParentRightCard/Card";

const ParentCard = () => {
  return (
    <div className="w-full h-[400px] border-0 flex flex-row gap-10 py-10">
      <ParentLeftCard />
      <ParentRightCard />
    </div>
  );
};

export default ParentCard;
