import React, { useEffect, useState } from "react";
import BlogHeader from "../Components/Header-components/blogHeader";
import JoinBlog from "../Components/Footer-components/secondJoinBlog";
import axios from "axios";
import Posts from "../blogApp/posts/posts";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://mayo-home.onrender.com/api/blog/");
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="max-w-[100vw] w-[100vw] ">
        <div className="">
          {/* Header */}
          <div className="">
            <BlogHeader />
          </div>
          {/* Body */}
          <div className=" w-[100vw] flex justify-center min-h-[100vh] ">
            <Posts posts={posts} />
          </div>
          {/* footer */}
          <div className=" max-w-[100vw] ">
            <JoinBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
