import React from "react";
import Navbar from "./Nav-bar/secondNavBar";
const CategoryNavigation = () => {
  return (
    <div className=" w-[100vw] max-w-[100vw] px-10 ">
      <div className=" bg-no-repeat bg-cover flex bg-cat-nav-texture flex-col relative w-full h-[487px] mt-[-10px]">
        <Navbar />
        <div className=" w-fit h-fit bg-transparent text-white leading-[104px] text-6xl font-bold font-display absolute bottom-[150px] left-[100px]">
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
