import React from "react";

const CatBanner = () => {
  return (
    <div className="w-[100vw] max-w-[100vw] px-10 ">
      <div className=" h-[209px] flex flex-col bg-banner-texture bg-no-repeat bg-cover py-10 text-white items-center justify-center">
        <p className=" text-center font-medium text-xl leading-[39px] ">
          Pick Your Favorite meal from any of the categories below
        </p>
      </div>
    </div>
  );
};

export default CatBanner;
