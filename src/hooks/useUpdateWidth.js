import { useEffect } from "react";
import { setItemWidth } from "../reducer/bodySlice";
import {useSelector,useDispatch} from 'react-redux'
import { debounce } from "lodash";
import { setIsScreen16 } from "../reducer/header2NavSlice";

export const useUpdateWidth = () => {
  const itemWidth = useSelector(s=>s.bodySlice.itemWidth)
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsScreen16())
      //#
      if (window.innerWidth < 550) {
        dispatch(setItemWidth(window.innerWidth - 24 * 2));
      } else if (window.innerWidth < 745) {
        dispatch(setItemWidth((window.innerWidth - 24 * 2 - 24) / 2));
      } else if (window.innerWidth < 950) {
        dispatch(setItemWidth((window.innerWidth - 40 * 2 - 24) / 2));
      } else if (window.innerWidth < 1130) {
        dispatch(setItemWidth((window.innerWidth - 40 * 2 - 24 * 2) / 3));
      } else if (window.innerWidth < 1440) {
        dispatch(setItemWidth((window.innerWidth - 40 * 2 - 24 * 3) / 4));


      } else if (window.innerWidth < 1640) {
        dispatch(setItemWidth((window.innerWidth - 80 * 2 - 24 * 3) / 4));
      } else if (window.innerWidth < 1880) {
        console.log(window.innerWidth -80 -80 )
        dispatch(setItemWidth((window.innerWidth - 80 * 2 - 24 * 4 -15) / 5)); //15 là width scrollbar
      } else {
        dispatch(setItemWidth((window.innerWidth - 80 * 2 - 24 * 5) / 6));
      }
    };
    handleResize();
    const debounceHandleResize = debounce(handleResize,200)
    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [itemWidth]);
};
