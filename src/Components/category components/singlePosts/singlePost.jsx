/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import BlogImgOne from "../../../Assets/blogAssets/blog images-1.png";

function Post({ item }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const name = item.name;
  return (
    <>
      <div className="post w-[420px] h-[493px] flex flex-col overflow-x-hidden items-center ">
        <button className=" w-[100%] flex flex-col items-center justify-center h-[433px] ">
          <Link
            to={`/category/${path}/${name}`}
            className=" w-[100%] flex flex-col items-center justify-end  hover:bg-[#e6e6e6] transition duration-250ms] ease-in-out"
          >
            <div className=" flex items-center justify-center z-[10] h-[384px] w-[337px] ">
              {item.image && (
                <img
                  src={item.image}
                  alt="A plate of food"
                  className=" max-w-[100%] max-h-[100%]"
                />
              )}
            </div>
            <div className="flex items-center justify-center w-full h-full bg-[#e6e6e6] ">
              <div className=" pt-10 pb-6 w-full h-full flex items-center justify-start flex-col">
                <h1 className="text-xl pt-4 w-[327px] text-start leading-[32.55px] font-display text-black">
                  {item.name}
                </h1>
              </div>
            </div>
          </Link>
        </button>
      </div>
    </>
  );
}

export default Post;
