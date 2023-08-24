import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {showLeftArrow,hideLeftArrow,showRightArrow,hideRightArrow} from '../reducer/header2NavSlice'
export default function useListenScroll() {
  const ref = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    let handleScroll = (e) => {
      let widthofChild = e.target.children[0].clientWidth;
      let widthOfEndScroll = widthofChild - e.target.clientWidth;

      let scrollLeft = e.target.scrollLeft;

      if (scrollLeft === 0) {
        dispatch(hideLeftArrow())
      } else {
        dispatch(showLeftArrow())

      }
      if (scrollLeft === widthOfEndScroll) {
        dispatch(hideRightArrow())
      } else {
        dispatch(showRightArrow())
      }
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => {
      ref.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ref ;
}
