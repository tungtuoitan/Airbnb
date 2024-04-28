import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import useCreateList from "../hooks/useCreateList";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Slider3UI } from "./slider3UI";

export default function Slider3() {
  const currentSliceIndex = useSelector((s) => s.roomSlice.currentSliceIndex);
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);

  const [height, setHeight] = useState(0);
  const contRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (contRef.current) {
        setHeight((contRef.current.offsetWidth / 3) * 2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const currentHomeList = useCreateList().currentHomeList;
  const currentRoom = currentHomeList[currentHomeId];
  let imgArr = currentRoom.imgarr;
  for(let i = 0 ;i<imgArr.length;i++ ){
    imgArr[i]= './images/homes_hd' + imgArr[i].slice((imgArr[i].length-8),imgArr[i].length)
  }

  return (
    <Slider3UI
      ref={contRef}
      height={height}
      imgArr={imgArr}
      currentSliceIndex={currentSliceIndex}
    />
  );
}
