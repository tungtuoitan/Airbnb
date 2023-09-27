import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useEffect,useRef } from "react";
import useCreateHandleTouchMoveLeft from "../hooks/useCreateTouchMoveLeft";
import useCreateHandleDragLeft from "../hooks/useCreateHandleDragLeft";
import { handleOnDragStart } from "../function/handleOnDragStart";
import useCreateLeftSpring from "../hooks/useCreateLeftSpring";
import useCreateHandleTouchStart from "../hooks/useCreateHandleTouchStart";
import { setIsPress } from '../reducer/filterSlice';

export default function LeftSlider() {
  const dispatch = useDispatch()
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
        || absolute   z1000
        ${ isPress[0] ? 'w-c36 h-c36 bottom-c-18':'w-c32 h-c32 bottom-c-16'}`}
      draggable
      ref={sliderRef}
      style={{ ...springs }}
      onTouchStart={(e)=>handleOnTouchStart(e)}
      onTouchMove={(e) => handleOnTouchMove(e)}
      onDragStart={(e) => handleOnDragStart(e)}
      onDrag={(e) => handleOnDrag(e)}
      //# isPress
      onMouseDown={()=>dispatch(setIsPress([true,false]))}
      onMouseUp={()=>dispatch(setIsPress([false,false]))}
      onDragEnd={()=>dispatch(setIsPress([false,false]))}
    />
  );
}
