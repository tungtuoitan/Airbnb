import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { setIsMenuOn } from "../reducer/header1Slice";

export const useClickOut = (contRef,itemRef)=>{
    const dispatch = useDispatch();
    useEffect(() => {
      const handleDocClick = (event) => {
        var x = event.target;
        if(contRef && itemRef){
          if (!contRef.current.contains(x) && !itemRef.current.contains(x)) {
            dispatch(setIsMenuOn(false));
          }
        }
      };
  
      document.addEventListener("click", handleDocClick);
      return () => {
        document.removeEventListener("click", handleDocClick);
      };
    }, []);
}