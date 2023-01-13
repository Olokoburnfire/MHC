import React from "react";
import "./Fixedheader.css";

const FixedHeading = () => {
  return (
    <div className="w-11/12 custom-heading mb-8">
      <p className=" heading-one  relative">
        <span className="custom">FOOD</span> wey dey{" "}
        <span className="burst">burst</span>{" "}
        <span className="custom">BRAIN!!!</span>
      </p>
      <p className="subheading text-[18px]">
        Order your custom-made meals, prepared with the ingredients of your
        choice and delivered straight to your location.
      </p>
    </div>
  );
};

export default FixedHeading;
