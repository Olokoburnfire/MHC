import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryNavigation from "../Components/Header-components/categoriesHeader";
import Footer from "../Components/Footer-components/Footer";
import JoinBlog from "../Components/Footer-components/secondJoinBlog";
import Posts from "../Components/category components/posts/posts";
const Categories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://mayo-home.onrender.com/api/category/"
      );
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className=" max-w-[100vw]  w-[100vw] min-h-[100vh]  flex flex-col box-border ">
      <header className="w-fit h-fit flex flex-col gap-[64px]">
        <section className="w-fit h-fit ">
          <div className="w-full h-full ">
            <CategoryNavigation />
          </div>
        </section>
      </header>
      <main className=" w-[100vw] max-w-[100vw] min-h-[100vh] h-full  bg-[#fff] ">
        <div className="">
          <Posts posts={posts} />
        </div>
      </main>
      <footer className=" w-[100vw] max-w-[100vw] h-fit ">
        <JoinBlog />
        <Footer />
      </footer>
    </div>
  );
};

export default Categories;
