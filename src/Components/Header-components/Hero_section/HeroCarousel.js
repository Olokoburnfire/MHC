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

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
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
    <div className="AppTwo">
      <div
        className="Slide w-[100vw] max-w-[100vw] "
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

      <div className=" absolute bottom-[50px] right-[300px] ">
        <div className="Page">
        <button className="secondPrev controlBtn" onClick={handlePre}>
            PREV
          </button>
          
          {content.map((item, index) => (
            <span
              key={index}
              className={counter - 1 === index ? "Dot Active" : "Dot"}
              onClick={() => handlePage(index + 1)}
            />
          ))}
          <button className="secondNext controlBtn" onClick={handleNext}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
