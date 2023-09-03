import { useSpring, animated } from "@react-spring/web";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function useDragginForSlider() {
  const displacement = useSelector((state) => state.filterSlice.displacement);
  let isDraggin = false;
  const sliderRef = useRef(null);
  const bounding = () => sliderRef.current.getBoundingClientRect();
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const handleOnMouseDown = (e) => {
    if (e.clientX > bounding().left && e.clientX < bounding().left + 32) {
      isDraggin = true;
    }
  };
  const handleOnMouseUp = (e) => {
    if(e.clientX!==0){
      console.log('dragginnnnnn',e.clientX - 16 - displacement)

      api.start({
        from: { x: bounding.left },
        to: { x: e.clientX - 16 - displacement },
        immediate: true,
      });
    }
  };
  useEffect(() => {
    if (displacement !== 0) {
      window.addEventListener("drag", (e) => {
        // if (isDraggin) {
          api.start({
            from: { x: bounding.left },
            to: { x: e.clientX - 16 - displacement },
            immediate: true,
          });
        // }
      });
    }
  }, [displacement]);
  return [springs, sliderRef, handleOnMouseDown, handleOnMouseUp];
}
