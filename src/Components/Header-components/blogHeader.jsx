import React from "react";
import Navbar from "./Nav-bar/secondNavBar";

const BlogHeader = () => {
  return (
    <>
      <div className=" bg-white h-[487px] w-[100vw] max-w-[100vw] px-10 flex">
        <div className="bg-[#d30606] w-[100%] h-full flex relative second-nav">
          {/* navigation center */}
          <div className="w-[100%] mt-[-50px] z-20 ">
            <Navbar />
          </div>
          <div className=" absolute flex w-[90%] gap-40 h-[90%] font-display font-bold text-[400px] leading-[500px] bg-gradient-to-b from-[#ffffff18] via-[#ffffff] to-[#ffffff00] bg-clip-text text-transparent ml-[92px] mt-3">
            <span>blog</span>
            <div className="w-full h-full absolute top-0 bg-gradient-to-b from-[#ffffff00]  via-[#d30606e0] via-[#d30606] via-[#ffffff] to-[#d30606] ">
              <p className=" font-display font-bold leading-[104.16px] text-[80px] text-white absolute bottom-[100px] left-7 ">
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
