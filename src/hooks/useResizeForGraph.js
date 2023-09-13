import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGraphHeight } from "../reducer/filterSlice";

export default function useResizeForGraph() {
  const ulRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      if (ulRef && ulRef.current) {
        // tương đương với > screen 745
        if (ulRef.current.offsetWidth > 550) {
          dispatch(setGraphHeight(ulRef.current.offsetWidth / 9));
        } else {
          dispatch(setGraphHeight(ulRef.current.offsetWidth / 5));
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return ulRef;
}
