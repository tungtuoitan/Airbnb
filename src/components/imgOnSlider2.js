import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSliceIndex } from "../reducer/roomsSlice";

export default function ImgsOnSlider2 ({imgArr}){
    const dispatch = useDispatch();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        onSwipe: (direction) => {
          if (direction === "left") {
            dispatch(setCurrentSliceIndex("left"));
          } else if (direction === "right") {
            dispatch(setCurrentSliceIndex("right"));
          }
        },
      };
    return(
        <Slider className="max-h-xs " {...settings}>
        {imgArr.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              className="w-full h-full object-cover bg-red-500 "
            />
          );
        })}
      </Slider>
    )
}