import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { setCurrentSliceIndex } from "../reducer/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowFullImgOn } from "../reducer/roomsSlice";
import { useEffect, useState } from "react";
import PrevBtn3 from "./preBtn3";
import NextButton3 from "./nextBtn3";

export default function ImgsOnSlider3({ imgArr }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsShowFullImgOn());
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: widthScreen < 745 ? false : true,
    onSwipe: (direction) => {
      if (direction === "left") {
        dispatch(setCurrentSliceIndex("left"));
      } else if (direction === "right") {
        dispatch(setCurrentSliceIndex("right"));
      }
    },
    prevArrow: <PrevBtn3 />,
    nextArrow: <NextButton3 />,
  };
  return (
    <Slider className="max-h-xs " {...settings}>
      {imgArr.map((item, index) => {
        return (
          <img
            src={item}
            key={index}
            className="imggg-slider3  h-full object-cover"
            onClick={handleOnClick}
          />
        );
      })}
    </Slider>
  );
}
