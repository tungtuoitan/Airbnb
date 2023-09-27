import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNumberOnShortList } from "../reducer/footerSlice.js";

export function useListenShortList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      let numberOnShortListNow;
      if (window.innerWidth < 745) {
        numberOnShortListNow = 7;
      } else {
        numberOnShortListNow = 11;
      }
      dispatch(setNumberOnShortList(numberOnShortListNow));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return;
}
