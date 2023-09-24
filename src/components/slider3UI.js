import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { forwardRef } from "react";
import ImgsOnSlider2 from "./imgOnSlider2";
import ImgsOnSlider3 from "./imgOnSlider3";


export const Slider3UI = forwardRef((props,ref)=> {
    const {height,imgArr,currentSliceIndex} = props
  return (
    <div
      ref={ref}
      style={{ height: `${height}px` }}
      className="slick-trackkk   overflow-hiddenx relative  "
    >
      <ImgsOnSlider3 imgArr={imgArr}/>
    </div>
  );
})
