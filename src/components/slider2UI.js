import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { forwardRef } from "react";
import ImgsOnSlider2 from "./imgOnSlider2";


export const Slider2UI = forwardRef((props,ref)=> {
    const {height,imgArr,currentSliceIndex} = props
  return (
    <div
      ref={ref}
      style={{ height: `${height}px` }}
      className="overflow-hidden relative "
    >
      <div
        className="absolute bottom-4 right-2 bg-black/50 rounded-sm z1000
        text-c11 text-white font-bold py-c6 px-4"
      >
        <span>{currentSliceIndex + 1}</span> / {imgArr.length}
      </div>
      <ImgsOnSlider2 imgArr={imgArr}/>
    </div>
  );
})
