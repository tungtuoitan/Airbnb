import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setLeftArrowDisplay,
  setRightArrowDisplay,
} from "../reducer/footerSlice.js";

export function useListenFooterNavBar() {
  const dispatch = useDispatch();
  const navBarRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let contentWidth = contentRef.current.offsetWidth;
      let containerWidth = navBarRef.current.clientWidth;
      if (navBarRef.current.scrollLeft === 0) {
        dispatch(setLeftArrowDisplay(false));
      } else {
        dispatch(setLeftArrowDisplay(true));
      }
      if (navBarRef.current.scrollLeft === contentWidth - containerWidth) {
        dispatch(setRightArrowDisplay(false));
      } else {
        dispatch(setRightArrowDisplay(true));
      }
    };
    navBarRef.current.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { contentRef, navBarRef };
}
