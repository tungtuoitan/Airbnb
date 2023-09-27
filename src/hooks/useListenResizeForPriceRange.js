import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplacement, setGraphWidth } from "../reducer/filterSlice";


export default function useListenResizeForPriceRange (){
    const dispatch = useDispatch();
    const contRef = useRef(null);
    useEffect(() => {
      const handleResize = () => {
        if (contRef.current) {
          const displacement = contRef.current.getBoundingClientRect().x;
          const graphWidth = contRef.current.offsetWidth;
    
          dispatch(setDisplacement(displacement));
          dispatch(setGraphWidth(graphWidth));
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return contRef

}