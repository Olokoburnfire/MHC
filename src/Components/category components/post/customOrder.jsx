/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/categoryAssets/customOrder.png";

function Order() {
  return (
    <>
      <div className="post w-[400px] h-[433px] flex flex-col items-center ] ">
        <button className=" w-[100%] flex flex-col items-center justify-center h-[433px] hover:bg-[#e6e6e6] transition duration-250ms] ease-in-out ">
          <div className="-mb-10 flex items-center justify-center z-0 h-[256px] w-[337px] ">
            <img
              src={logo}
              alt="Custom order"
              className=" max-w-[100%] max-h-[100%]"
            />
          </div>
          <div className="flex items-center justify-center w-full h-full bg-[#e6e6e6]">
            <div className=" pt-10 pb-6 w-full h-full flex items-center justify-between flex-col gap-[px]">
              <h1 className="text-xl pt-4 w-[327px] text-start leading-[32.55px] font-display text-black">
                Custom order
              </h1>
              <p className="w-[327px] h-auto text-[#262626] text-base font-display text-justify leading-5 ">
                One of the reasons we are the best is our ability to customize
                your meal according to your preferences. Is there any dish you
                want that's not on the menu? 🫣 Contact us today, and we'll get
                it done for you!  ☺️😋
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Order;
