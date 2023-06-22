import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import {ApiSlides} from "../componentApi/SliderApi";
import "./Slider.css";

function Slider() {
  // useState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  // style
  const arrowStyle =
    "left-arrow rounded-full bg-gray-100 flex justify-center items-center shadow-sm hover:cursor-pointer";

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nexSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="h-[540px] bg-white flex items-center justify-between mobile:hidden">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{fontSize: "50px"}} onClick={prevSlide} />
      </div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              key={index}
              className={`wrapper flex w-full h-[500px] justify-center items-center shadow-2xl bordered-lg border-[#c0c0c0] border-10px overflow-hidden relative ${slide.background}`}>
              <div className="slide flex items-center justify-center h-full">
                <div className="forImage flex flex-1 items-center justify-center h-full">
                  <img
                    className="h-full object-cover"
                    src={slide.src}
                    alt="slide_image"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-8">
                  <h2 className="text-5xl">{slide.content.h2}</h2>
                  <p className="text-3xl">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{fontSize: "50px"}} onClick={nexSlide} />
      </div>
    </div>
  );
}

export default Slider;
