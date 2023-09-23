import React, { useRef, useState } from "react";
// import Slider from "./slider";
import InvisibleLayer from "./invisible-layer";
import SliderTry from "./sliderTry";
import { useEffect } from "react";
import { useDispatch, useSeletor } from "react-redux";
import { useUpdateScreenWidth, useUpdateWidth } from "../hooks/useUpdateWidth";



export default function ImgGroup() {
  

  return (
    <div
      className="aspect-square  relative rounded-xl overflow-hidden mb-c14  w-full    "
    >
      <SliderTry  />
      <InvisibleLayer />
    </div>
  );
}
