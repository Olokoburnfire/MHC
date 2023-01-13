import React from "react";
import Post from "../post/post";

function Posts({ posts }) {
  return (
    <>
      <div className="w-[100vw] flex justify-center py-[40px] px-[60px]">
        <div className=" w-[fit-content] mx-[80px] gap-[60px] flex flex-wrap ">
          {posts.map((p) => (
            <Post post={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
