import React from "react";
import Navbar from "../Header-components/Nav-bar/navbar";
import HeroSection from "./Hero_section/hero_section";
const HomeHeader = () => {
  return (
    <>
      <div className="bg-header-texture bg-no-repeat bg-contain bg-left-top max-w-[100vw] w-[100vw] h-fit  ">
        {/* navigation  */}
        <div className="">
          <Navbar />
        </div>
        {/* hero section  */}
        <div className="">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
