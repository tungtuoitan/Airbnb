import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleTouchMoveLeft from "../hooks/useCreateTouchMoveLeft";
import useCreateHandleDragLeft from "../hooks/useCreateHandleDragLeft";

export default function Test1() {
//   const handleOnTouchMove = useCreateHandleTouchMoveLeft();
//   const handleOnDrag = useCreateHandleDragLeft();
//   const leftSliderValue = useSelector(
//     (state) => state.filterSlice.leftSliderValue
//   );
//   const handleCheck = (e) => {
//     // console.log(window.getComputedStyle(e.target).getPropertyValue('cursor'))
//     console.log(e.defaultPrevented, event.defaultPrevented);
//   };
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: leftSliderValue },
  // });

  return (
    // <animated.div
    //   className={`w-c32 h-c32 || rounded-full bg-white ||
    //     || border-c1 border-solid border-gray-300  cursor-pointer
    //     || box-shadow-u11
    //     || relative top-c-16
    //     `}
    //   // style={{ ...springs }}
    //   // onTouchMove={(e) => handleOnTouchMove(e)}
    //   // onDrag={(e)=> handleOnDrag(e)}
    //   // onDragStart={(e)=>handleCheck(e)}

    // />
    <div
      className={`w-c32 h-c32 bg-black
        `}
    ></div>
  );
}
