import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

const HeroCarousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="AppTwo relative">
      <div
        className="Slide w-[532px] max-w-[532px] h-[750px] "
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? "Show" : "not-Show"}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="absolute bottom-[-10px] left-[48%] ">
        <div className="Page">
          {content.map((item, index) => (
            <span
              key={index}
              className={counter - 1 === index ? "Dot Active" : "Dot"}
              onClick={() => handlePage(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
