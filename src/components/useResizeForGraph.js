import { useState, useRef, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setGraphHeight } from "../reducer/filterSlice";

export default function useResizeForGraph() {
    const ulRef = useRef(null);
    const dispatch = useDispatch()
  useEffect(() => {
    const handleResize = () => {
      if (ulRef && ulRef.current) {
        dispatch(setGraphHeight(ulRef.current.offsetWidth / 4.5))
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return  ulRef 
}
