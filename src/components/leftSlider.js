import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useEffect,useRef } from "react";
import useCreateHandleTouchMoveLeft from "../hooks/useCreateTouchMoveLeft";
import useCreateHandleDragLeft from "../hooks/useCreateHandleDragLeft";
import { handleOnDragStart } from "../function/handleOnDragStart";
import useCreateLeftSpring from "../hooks/useCreateLeftSpring";
import useCreateHandleTouchStart from "../hooks/useCreateHandleTouchStart";

export default function LeftSlider() {
  const isPress = useSelector(state=>state.filterSlice.isPress)
  let handleOnTouchMove = useCreateHandleTouchMoveLeft()
 
  const handleOnDrag = useCreateHandleDragLeft();
  const springs = useCreateLeftSpring();
  const [handleOnTouchStart,sliderRef] = useCreateHandleTouchStart()
  return (
    <animated.div
      className={` || rounded-full bg-white ||
        || border-c1 border-solid border-gray-300  
        || box-shadow-u11 cursor-pointer
        || relative top-c-16  z1000
        ${isPress ? 'w-c40 h-c40':'w-c32 h-c32'}`}
      draggable
      ref={sliderRef}
      style={{ ...springs }}
      // onTouchStart={(e)=>handleOnTouchStart(e)}
      onTouchMove={(e) => handleOnTouchMove(e)}
      onDragStart={(e) => handleOnDragStart(e)}
      onDrag={(e) => handleOnDrag(e)}
    />
  );
}
