import { useEffect } from "react";
import { setItemWidth } from "../reducer/bodySlice";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { setIsScreen16 } from "../reducer/header2NavSlice";

export const useUpdateWidth = (contRef) => {
  const itemWidth = useSelector((s) => s.bodySlice.itemWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsScreen16());
      //#
      if (contRef.current) {
        
        const contWidth = contRef.current.getBoundingClientRect().width;

        if (window.innerWidth < 550) {
          dispatch(setItemWidth(contWidth));
        } else if (window.innerWidth < 745) {
          dispatch(setItemWidth((contWidth - 24) / 2));
        } else if (window.innerWidth < 950) {
          dispatch(setItemWidth((contWidth - 24) / 2));
        } else if (window.innerWidth < 1130) {
          dispatch(setItemWidth((contWidth - 24 * 2) / 3));
        } else if (window.innerWidth < 1440) {
          dispatch(setItemWidth((contWidth - 24 * 3) / 4));
        } else if (window.innerWidth < 1640) {
          dispatch(setItemWidth((contWidth - 24 * 3) / 4));
        } else {
          dispatch(setItemWidth((contWidth - 24 * 4 ) / 5)); //15 là width scrollbar
        }
      }
    };
    handleResize();
    const debounceHandleResize = debounce(handleResize, 200);
    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [itemWidth]);
};
