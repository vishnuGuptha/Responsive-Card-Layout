import React from "react";
import Header from "./Components/header";
import Hero from "./Components/hero";
import ParentCard from "./Components/ParentCard";

const Version2 = () => {
  return (
    <div className="bg-[#e4e6f3] w-full h-full px-[136px] min-h-screen pb-12">
      <Header />
      <Hero />
      <ParentCard />
    </div>
  );
};

export default Version2;
