/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slide from "./testimonial-slide";

const Testimonial = () => {
  return (
    <>
      <div className="  ">
        <div className=" bg-[#e4e4e4] max-w-[100vw] w-[100vw] h-[500px] pt-[32px]">
          {/* Heading */}
          <div className=" max-w-[100vw] w-[100vw] flex flex-row gap-3 items-center justify-center">
            <div className=" w-[150px] bg-[#d30606] h-[4px]"></div>
            <h1 className=" font-bold text-[30px] leading-[50px] text-[#fff] text-center">
              CUSTOMERS LOVE MHC
            </h1>
            <div className="dash_2 w-[150px] bg-[#d30606] h-[4px]"></div>
          </div>
          {/* Body */}
          <div className="bg-transparent max-w-[100vw] w-[100vw] h-[320px] mt-[32px] ">
            <Slide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
