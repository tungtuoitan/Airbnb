import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { homeList } from "../datas/homeListOriginal";
import "./slider.css";
import PrevButton2 from "./prevBtn2";
import NextButton2 from "./nextBtn2";
import { useState } from "react";
import DotsSlide from "./dots-slide";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SliderTry({ width }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const handleOnMouseMove = () => {
    setIsHovering(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovering(false);
  };
  const i = useContext(IndexContext);
  const imgArr = homeList[i].imgarr;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <PrevButton2
        isPrevBtnDisplay={currentIndex === 0 ? false : true}
        isHovering={isHovering}
      />
    ),
    nextArrow: (
      <NextButton2
        isNextBtnDisplay={currentIndex === imgArr.length - 1 ? false : true}
        isHovering={isHovering}
      />
    ),
    beforeChange: (currentI, nextI) => {
      setCurrentIndex(nextI);
    },
  };
  return (
    <div
      className=" relative"
      style={{ width: width + "px", height: width + "px" }}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      <Slider {...settings}>
        {imgArr.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              className="m-0 max-w-full w-full h-full max-h-full object-cover  "
            />
          );
        })}
      </Slider>
      <DotsSlide imgArr={imgArr} currentIndex={currentIndex} />
    </div>
  );
}
