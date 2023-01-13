import { React } from "react";
import Post from "../singlePosts/singlePost";

function SinglePosts({ items }) {
  return (
    <>
      <div className="w-[100vw] flex justify-center py-[40px] ">
        <div className=" w-[fit-content] mx-[40px] gap-[35px] flex flex-wrap ">
          {items.map((i) => (
            <Post item={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SinglePosts;
