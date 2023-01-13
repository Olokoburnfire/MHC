/* eslint-disable react/jsx-no-undef */
import React from "react";
import Logo from "../../Assets/Logos/brand_logo.png";
import { Link } from "react-router-dom";
import SocialMedia from "./social-media";

let links = [
  { name: "> Home", href: "/" },
  { name: "> Category", href: "/category" },
  { name: "> FAQs", href: "/faq" },
  { name: "> Blog", href: "/blog" },
];

const Footer = () => {
  return (
    <div className="max-w-[100vw] w-[100vw] ">
      <div className=" bg-gradient-to-r from-[#ffffff00] via-[#d71818] via-[#d30606] via-[#d71818] to-[#ffffff00] max-w-[100vw] h-full pt-px">
        <div className="max-w-[100vw] h-56 box-border bg-[#e4e4e4] flex flex-row items-center justify-between pr-16 relative">
          {/* left side of footer section */}
          <div className="flex flex-col items-start justify-start ">
            <div className=" w-fit -mt-16">
              <img src={Logo} alt="MHC logo" className="w-[70%] h-auto" />
            </div>
            <p className="w-fit h-auto text-[#000] text-center leading-3 text-xs absolute bottom-4 left-4">
              <span className=" text-sm "> &copy;</span> 2022 Mayo’s home cooked
              meal | Developed by <span className=" text-end"> Olokodana</span>
            </p>
          </div>

          {/* right side of the footer section */}
          <div className="flex flex-row gap-16">
            {/* Site map */}
            <div className=" w-fit flex flex-col gap-4 mt-8">
              <h1 className=" font-bold text-[15px] leading-[19px] text-[#d71818f5] ">
                Our Useful Links
              </h1>
              <div className="">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className=" flex flex-col w-fit mb-[3px] text-[#000] font-normal leading-[20px] text-[15px]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* social media link */}
            <div className="flex flex-col items-start justify-start gap-4 mt-8 w-[288px]">
              <h1 className=" font-bold text-[15px] leading-[19px] text-[#d71818f5]  ">
                Our Social Networks
              </h1>
              <p className=" flex flex-col w-fit mb-[3px] text-[#000] font-normal leading-[20px] text-[15px]">
                We’ll love to keep in touch with you! Follow us across our
                social media platforms and let’s keep you updated on our latest
                offers and promotions.
              </p>
              <div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
