import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useResizeForImgsOnRooms(ulRef) {
  useEffect(() => {
    const screenWidth = window.innerWidth
    const handleResize = () => {
     
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return ulRef;
}
