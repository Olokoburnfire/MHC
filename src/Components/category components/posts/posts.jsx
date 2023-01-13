import React from "react";
import Post from "../post/post";
import Order from "../post/customOrder";
import CatBanner from "../../Header-components/Hero_section/cat-banner";

function Posts({ posts }) {
  return (
    <>
      <section className=" w-[100vw] h-full pt-[40px]">
        <div className="w-full h-full">
          <CatBanner />
        </div>
      </section>
      <div className="w-[100vw] flex justify-center py-[40px] ">
        <div className=" w-[fit-content] mx-[40px] gap-[35px] flex flex-wrap ">
          {posts.map((p) => (
            <Post post={p} />
          ))}

          <Order />
        </div>
      </div>
    </>
  );
}

export default Posts;
