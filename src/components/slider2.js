import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import useCreateList from "../hooks/useCreateList";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider2UI } from "./slider2UI";

export default function Slider2() {
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
  const imgArr = currentRoom.imgarr;

  return (
    <Slider2UI
      ref={contRef}
      height={height}
      imgArr={imgArr}
      currentSliceIndex={currentSliceIndex}
    />
  );
}
