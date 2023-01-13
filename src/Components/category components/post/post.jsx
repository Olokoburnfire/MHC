/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import BlogImgOne from "../../../Assets/blogAssets/blog images-1.png";

function Post({ post }) {
  const name = post.name;

  return (
    <>
      <div className="post w-[400px] h-[433px] flex flex-col items-center ] ">
        <button className=" w-[100%] flex flex-col items-center justify-center h-[433px] ">
          <Link
            to={`/category/${name}`}
            className=" w-[100%] flex flex-col items-center justify-end h-[433px] hover:bg-[#e6e6e6] transition duration-250ms] ease-in-out"
          >
            <div className="-mb-10 flex items-center justify-center z-0 h-[256px] w-[337px] ">
              {post.image && (
                <img
                  src={post.image}
                  alt="A plate of food"
                  className=" max-w-[100%] max-h-[100%]"
                />
              )}
            </div>
            <div className="flex items-center justify-center w-full h-full bg-[#e6e6e6]">
              <div className=" pt-10 pb-6 w-full h-full flex items-center justify-start flex-col gap-[px]">
                <h1 className="text-xl pt-4 w-[327px] text-start leading-[32.55px] font-display text-black">
                  {post.name}
                </h1>
                <p className="w-[327px] h-auto text-[#262626] text-base font-display text-justify leading-5 ">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        </button>
      </div>
    </>
  );
}

export default Post;
