import React from "react";
import HeroCarousel from "./HeroCarousel.js";
import SlideOne from "../../../Assets/Header-Slider/slide 1.png";
import SlideTwo from "../../../Assets/Header-Slider/slide 2.png";
import SlideThree from "../../../Assets/Header-Slider/slide 3.png";
import SlideFour from "../../../Assets/Header-Slider/slide 4.png";
import FixedHeading from "../../../Components/Homepage-component/fixed_heading";
const HeroSection = () => {
  return (
    <>
      <div className=" w-[100vw] max-w-[100vw] h-[fit-content] ">
        <div className="relative">
          <div className=" absolute right-[50px] top-[0px] ">
            <FixedHeading />
          </div>
          <HeroCarousel>
            {/* First slide */}
            <div className=" w-[100vw] px-[10px] flex flex-row gap-[50px]">
              {/* Image slider */}
              <div className=" w-[65%] ">
                <img
                  className=" md:w-[60%] h-auto "
                  src={SlideOne}
                  alt="img2"
                />
              </div>
              {/*Slider Title */}
              <div className=" w-[40%] mb-[120px] bg-no-repeat bg-center bg-contain flex bg-subTitle-texture self-end justify-center h-[250px]  ">
                <div className="flex flex-col justify-end items-start ">
                  <h1 className="  text-[18px] leading-[26px] text-start text-[#000] font-medium">
                    Categories
                  </h1>
                  <h1 className="text-[#ff0000] font-bold text-[32px] leading-[52px] text-start ">
                    Soup
                  </h1>
                  <p className=" font-normal text-[16px] leading-[23px] text-start text-[#000] w-[400px] ">
                    Ever seen a Nigerian who doesn't like soups? Take your pick
                    of over 30 indigenous soups from all over Nigeria, and give
                    your taste buds a treat.
                  </p>
                  <button
                    type="button"
                    className=" mt-[12px] h-[49px] w-[168px]  rounded-[10px] bg-gradient-to-b from-[#d30606] to-[#660606]  text-center font-bold text-[15px] leading-[19px] text-white opacity-[1] "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Second slide */}
            <div className=" w-[100vw] px-[10px] flex flex-row gap-[50px]">
              {/* image slider */}
              <div className=" w-[65%] ">
                <img
                  className=" md:w-[60%] h-auto "
                  src={SlideTwo}
                  alt="img2"
                />
              </div>
              {/*Slider Title */}
              <div className=" w-[40%] mb-[120px] bg-no-repeat bg-center bg-contain flex bg-subTitle-texture self-end justify-center h-[250px]  ">
                <div className="flex flex-col justify-end items-start ">
                  <h1 className="  text-[18px] leading-[26px] text-start text-[#000] font-medium">
                    Categories
                  </h1>
                  <h1 className="text-[#ff0000] font-bold text-[32px] leading-[52px] text-start ">
                    Protein
                  </h1>
                  <p className=" font-normal text-[16px] leading-[23px] text-start text-[#000] w-[400px] ">
                    A fantastic combo: FInger-licking meats and fishes which
                    also contains essential vitamins and minerals and a great
                    source of protein
                  </p>
                  <button
                    type="button"
                    className=" mt-[12px] h-[49px] w-[168px]  rounded-[10px] bg-gradient-to-b from-[#d30606] to-[#660606]  text-center font-bold text-[15px] leading-[19px] text-white opacity-[1] "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Third slide */}
            <div className=" w-[100vw] px-[10px] flex flex-row gap-[50px]">
              {/* image slider */}
              <div className=" w-[65%] ">
                <img
                  className=" md:w-[60%] h-auto "
                  src={SlideThree}
                  alt="img2"
                />
              </div>
              {/*Slider Title */}
              <div className=" w-[40%] mb-[120px] bg-no-repeat bg-center bg-contain flex bg-subTitle-texture self-end justify-center h-[250px]  ">
                <div className="flex flex-col justify-end items-start ">
                  <h1 className="  text-[18px] leading-[26px] text-start text-[#000] font-medium">
                    Categories
                  </h1>
                  <h1 className="text-[#ff0000] font-bold text-[32px] leading-[52px] text-start ">
                    Pepper Soup
                  </h1>
                  <p className=" font-normal text-[16px] leading-[23px] text-start text-[#000] w-[400px] ">
                    A well prepared bowl of pepper soup is medicine both to the
                    soul and body. Click to enjoy a tantalizing bowl of assorted
                    chicken, cow tail, fish, goat meat and turkey pepper soup.
                  </p>
                  <button
                    type="button"
                    className=" mt-[12px] h-[49px] w-[168px]  rounded-[10px] bg-gradient-to-b from-[#d30606] to-[#660606]  text-center font-bold text-[15px] leading-[19px] text-white opacity-[1] "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Fourth slide */}
            <div className=" w-[100vw] px-[10px] flex flex-row gap-[50px]">
              {/* image slider */}
              <div className=" w-[65%] ">
                <img
                  className=" md:w-[60%] h-auto "
                  src={SlideFour}
                  alt="img2"
                />
              </div>
              {/*Slider Title */}
              <div className=" w-[40%] mb-[120px] bg-no-repeat bg-center bg-contain flex bg-subTitle-texture self-end justify-center h-[250px]  ">
                <div className="flex flex-col justify-end items-start ">
                  <h1 className="  text-[18px] leading-[26px] text-start text-[#000] font-medium">
                    Categories
                  </h1>
                  <h1 className="text-[#ff0000] font-bold text-[32px] leading-[52px] text-start ">
                    Starchy
                  </h1>
                  <p className=" font-normal text-[16px] leading-[23px] text-start text-[#000] w-[400px] ">
                    Check out our variety of swallows designed to be the perfect
                    partner to our soup, stew, and pepper soup.
                  </p>
                  <button
                    type="button"
                    className=" mt-[12px] h-[49px] w-[168px]  rounded-[10px] bg-gradient-to-b from-[#d30606] to-[#660606]  text-center font-bold text-[15px] leading-[19px] text-white opacity-[1] "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </HeroCarousel>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
