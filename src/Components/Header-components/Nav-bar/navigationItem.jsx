import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart, HiSearch } from "react-icons/hi";
import FormContainer from "../../Login and Registration/formContainer";
import { useEffect } from "react";
import { useRef } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

const NavItems = () => {
  const home = { name: "Home", href: "/" };
  const blog = { name: "Blog", href: "/blog" };
  const categories = { name: "Categories", href: "/category" };
  const faq = { name: "FAQ", href: "/faq" };
  const search = { name: "Search", href: "/search" };
  const cart = { name: "Cart", href: "/cart" };
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // slide in and slide out feature for the sign in component
  const slideinRef = useRef();

  const [Slidein, setSlidein] = useState(false);

  const Sliding = () => {
    setSlidein(!Slidein);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!slideinRef.current.contains(e.target)) {
        setSlidein(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleClick = () => {
    logout();
  };

  return (
    <>
      <main
        ref={slideinRef}
        className="w-fit h-[50px] pr-[20px] items-center justify-center flex flex-row gap-[30px] "
      >
        {/* Link to Homepage */}
        <NavLink
          key={home.name}
          to={home.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal cursor-pointer border-[4px] border-[transparent]  duration-500 ease-linear transition-all " +
              (isActive
                ? " border-b-[#d30606] "
                : "hover:border-b-[#d3060680] ")
            );
          }}
        >
          {home.name}
        </NavLink>
        {/* Link to Categories */}
        <NavLink
          key={categories.name}
          to={categories.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal cursor-pointer border-[4px] border-[transparent]  duration-500 ease-linear transition-all " +
              (isActive ? " border-b-[#d30606] " : "hover:border-b-[#d3060680]")
            );
          }}
        >
          {categories.name}
        </NavLink>
        {/* Link to Faq */}
        <NavLink
          key={faq.name}
          to={faq.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal duration-500 ease-linear transition-all  cursor-pointer border-[4px] border-[transparent]  " +
              (isActive ? "border-b-[#d30606]" : "hover:border-b-[#d3060680] ")
            );
          }}
        >
          {faq.name}
        </NavLink>
        {/* Link to Blog */}
        <NavLink
          key={blog.name}
          to={blog.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal cursor-pointer duration-500 ease-linear transition-all  border-[4px] border-[transparent]  " +
              (isActive ? " border-b-[#d30606]" : "hover:border-b-[#d3060680] ")
            );
          }}
        >
          {blog.name}
        </NavLink>
        {/* Link to Cart */}
        <NavLink
          key={cart.name}
          to={cart.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal cursor-pointer duration-500 ease-linear transition-all  border-[4px] border-[transparent] " +
              (isActive ? " border-b-[#d30606]" : "hover:border-b-[#d3060680]")
            );
          }}
        >
          <HiShoppingCart />
        </NavLink>
        {/* Link to Search */}
        <NavLink
          key={search.name}
          to={search.href}
          className={({ isActive }) => {
            return (
              "text-lg text-black non-italic font-normal cursor-pointer border-[4px] duration-500 ease-linear transition-all border-[transparent]  " +
              (isActive ? " border-b-[#d30606]" : "hover:border-b-[#d3060680]")
            );
          }}
        >
          <HiSearch />
        </NavLink>
        {/* logout button */}
        {user && (
          <div className="">
            <span className="">{user.name}</span>
            <button onClick={handleClick} className="text-xs text-[#000]">
              Log out
            </button>
          </div>
        )}

        {/* Link to Login button */}
        {!user && (
          <NavLink
            className={({ isActive }) => {
              return "text-lg text-black non-italic font-normal cursor-pointer border-[2px] px-[5px] py-[2px] border-[#d30606] hover:bg-[#d30606] hover:text-[#fff] duration-500 ease-linear transition-all ";
            }}
            onClick={Sliding}
          >
            Login
          </NavLink>
        )}
        {/* the Login Component */}
        <section
          className={`absolute bg-[#fff] w-fit rounded-lg top-10 right-[4px] h-fit ${
            Slidein
              ? "  opacity-100 visible translate-x-0 ease-in  duration-[500ms] z-[9999999] "
              : "opacity-0 hidden translate-x-[0px] ease-out duration-[500ms] "
          } `}
        >
          <FormContainer />
        </section>
      </main>
    </>
  );
};

export default NavItems;
