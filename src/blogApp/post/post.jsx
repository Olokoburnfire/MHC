/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import BlogImgOne from "../../Assets/blogAssets/blog images-1.png";

function Post({ post }) {
  const id = post._id;

  return (
    <>
      <div className="post w-[307.33px] h-[503.7px] flex flex-col items-center pt-[26.3px] px-5 hover:bg-[rgba(255,192,192,0.73)] ">
        {post.image && (
          <img
            className="postImg w-[50%] h-auto object-cover"
            src={post.image}
            alt="blog-image"
          />
        )}
        <div className="postInfo flex flex-col items-center ">
          <h1 className="PostTitle leading-[28px] font-bold text-center w-[70%] text-[#000] mt-8 text-[26px] ">
            {post.title}
          </h1>
          <p className="text-[14px] leading-[18px] font-normal text-center mt-[13px] text-[#000]">
            {post.content}
          </p>
          <p className="postDate text-[#D30606] text-[14px] leading-[18px] font-normal mt-[16px]">
            {new Date(post.createdAt).toDateString()}
          </p>
        </div>
        <button className="bg-gradient-to-b from-[#d71818] to-[#880101] text-[#fff] opacity-100 w-[120px] text-[14px] leading-[18px] font-normal text-center mt-[23px] h-[40px]">
          <Link to={`/blog/${id}`}>Read More...</Link>
        </button>
      </div>
    </>
  );
}

export default Post;
