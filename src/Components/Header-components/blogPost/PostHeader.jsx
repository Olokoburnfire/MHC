import React from "react";
import { HiShare, HiThumbUp, HiThumbDown } from "react-icons/hi";

import Navbar from "../Nav-bar/secondNavBar";

function PostHeader() {
  return (
    <>
      <div className=" w-[100vw] h-[355px] max-w-[100vw] flex justify-center items-center rounded-br-xl rounded-bl-xl ">
        <div className=" w-[90%] bg-post-header-texture bg-cover bg-no-repeat h-[355px] flex relative rounded-br-xl rounded-bl-xl ">
          <div className=" w-[100%] h-[100%] bg-[rgba(255,97,97,0.50)]  flex flex-col items-start justify-between rounded-br-xl rounded-bl-xl">
            <div className=" w-[100%] mt-[-50px]">
              <Navbar />
            </div>
            <div className="titleInfo pb-[80px] pl-[60px] text-[#fff]">
              <h1 className="text-[45px] font-bold leading-[57px] pb-[40px] ">
                Our New Recipe
              </h1>
              <p className="font-normal text-[14px] leading-[18px] pb-[10px] ">
                Publish: <span className="">Wed July 22, 2022</span>
              </p>
              <div className=" flex flex-row gap-[40px] text-[30px]">
                <button className="drop-shadow-md">
                  <HiThumbUp />
                </button>
                <button className="drop-shadow-md">
                  <HiThumbDown />
                </button>
                <button className="drop-shadow-md">
                  <HiShare />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostHeader;
