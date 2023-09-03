import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleTouchMoveLeft from "../hooks/useCreateTouchMoveLeft";
import useCreateHandleDragLeft from "../hooks/useCreateHandleDragLeft";

export default function LeftSlider() {
  const handleOnTouchMove = useCreateHandleTouchMoveLeft();
  const handleOnDrag = useCreateHandleDragLeft();
  const leftSliderValue = useSelector(
    (state) => state.filterSlice.leftSliderValue
  );
  const handleOnDragStart=(e)=>{
    // e.preventDefault()
    console.log('hi')
      var emptyImage = new Image();
      emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
      e.dataTransfer.setDragImage(emptyImage, 0, 0);
      e.dataTransfer.effectAllowed = 'all'
      console.log(e.dataTransfer)
      
    };
  
  
  const springs = useSpring({
    from: { x: 0 },
    to: { x: leftSliderValue },
    immediate:true
  });

  return (
    <animated.div
      className={`w-c32 h-c32 || rounded-full bg-white ||
        || border-c1 border-solid border-gray-300  cursor-pointer set-cursor cursor-pointer
        || box-shadow-u11 
        || relative top-c-16  zmax3
        `}
        draggable
      style={{ ...springs,  }}
      // onTouchMove={(e) => handleOnTouchMove(e)}
      onDrag={(e)=> handleOnDrag(e)}
      onDragStart={(e)=>handleOnDragStart(e)}
    />
   
  );
}
