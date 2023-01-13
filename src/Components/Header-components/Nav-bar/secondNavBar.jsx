import React from "react";
import NavLogo from "./secondNavLogo";
import NavItems from "./secondNavItem";

const Navbar = () => {
  return (
    <>
      <div className=" ">
        <div className="flex flex-row w-[100%] py-4 items-center justify-between px-5 max-w-[100vw] h-fit">
          {/* nav logo */}
          <div className="bg-[transparent] ">
            <NavLogo />
          </div>
          {/* nav items */}
          <div className="">
            <NavItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
