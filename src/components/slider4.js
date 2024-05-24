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
import { useDispatch, useSelector } from "react-redux";
import { shuffleNTimes } from "../function/shuffleArray";
import { setIsHoverItem, setHoveringIndex } from "../reducer/bodySlice";
import { checkIsLaptop } from "../function/checkIsLaptop";
import useUpdatePrice from "../hooks/useUpdatePrice";
import { useUpdateWidth } from "../hooks/useUpdateWidth";

export default function Slider4() {
  const itemWidth = useSelector((s) => s.bodySlice.itemWidth);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovering = useSelector((s) => s.bodySlice.isHoverItem);
  const isLaptop = useSelector((s) => s.bodySlice.isLaptop);

  const i = useSelector((s) => s.roomSlice.currentHomeId);
  const handleOnMouseMove = () => {
    if (isLaptop) {
      dispatch(setIsHoverItem(true));
      dispatch(setHoveringIndex(i));
    }
  };
  const handleOnMouseLeave = () => {
    if (isLaptop) {
      dispatch(setIsHoverItem(false));
      dispatch(setHoveringIndex(i));
    }
  };
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);

  const imgArr = currentHomeList[i].imgarr;
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
      className=" relative border1"
      style={{ width: itemWidth + "px", height: itemWidth + "px" }}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      <Slider {...settings}>
        {imgArr.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              className="XXX m-0 max-w-full w-full h-full max-h-full object-cover   "
            />
          );
        })}
      </Slider>
    </div>
  );
}
