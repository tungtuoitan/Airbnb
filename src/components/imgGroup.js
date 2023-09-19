import React, { useRef, useState } from "react";
// import Slider from "./slider";
import InvisibleLayer from "./invisible-layer";
import SliderTry from "./sliderTry";
import { useEffect } from "react";

export default function ImgGroup() {
  const [width,setWidth] = useState(0)
  const contRef = useRef(null)
  useEffect(()=>{
    const handleResize = () => {
      if(contRef.current){
        setWidth(contRef.current.clientWidth)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)}
  },[])

  return (
    <div ref={contRef} 
    className="aspect-square  relative rounded-xl overflow-hidden mb-c14  w-full  "
    >
      <SliderTry width = {width} />
      <InvisibleLayer />
    </div>
  );
}
