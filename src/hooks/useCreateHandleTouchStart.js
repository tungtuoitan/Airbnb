import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function useCreateHandleTouchStart() {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const x =  (e) => {
    dispatch(setIsDraggable(false));
    if (
      e.touches[0].clientX >= sliderRef.current.getBoundingClientRect().x &&
      e.touches[0].clientX <= sliderRef.current.getBoundingClientRect().x + 32
    ) {
      dispatch(setIsDraggable(true));
    }
  };
  return [x,sliderRef]
}
