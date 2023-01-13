import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer-components/Footer";
import JoinBlog from "../../Footer-components/secondJoinBlog";
import CategoryNavigation from "../categoriesHeader";
import SinglePosts from "../singlePosts/SinglePosts";

function Single() {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `https://mayo-home.onrender.com/api/category/${path}`
      );
      setItems(res.data.data);
    };
    getPost();
  }, [path]);
  return (
    <>
      <div className="max-w-[100vw] w-[100vw]  flex flex-col gap-5 overflow-x-hidden ">
        <header className="w-fit h-fit flex flex-col gap-[64px]">
          <section className="w-fit h-fit ">
            <div className="w-full h-full ">
              <CategoryNavigation />
            </div>
          </section>
        </header>
        <main className="w-[100vw] flex justify-center py-[40px] ">
          <div className=" w-[fit-content] mx-[40px] gap-[35px] flex flex-wrap ">
            <SinglePosts items={items} />
          </div>
        </main>
        <footer className=" w-[100vw] max-w-[100vw] h-fit ">
          <JoinBlog />
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Single;
