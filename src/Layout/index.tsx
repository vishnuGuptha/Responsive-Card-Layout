import React from "react";
import { Footer, Header, MainPage } from "../Pages";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="max-w-[4000px] mx-auto">
        <MainPage />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
