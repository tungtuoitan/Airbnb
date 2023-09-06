import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleTouchMoveRight from "../hooks/useCreateTouchMoveRight";
import useSetRightSliderFirstTime from "../hooks/useSetSliderRightFirstTime";
import useCreateHandleDragRight from "../hooks/useCreateHandleDragRight";
import { handleOnDragStart } from "../function/handleOnDragStart";
import { setIsPress } from "../reducer/filterSlice";

export default function RightSlider() {
  const dispatch = useDispatch();
  const isPress = useSelector((state) => state.filterSlice.isPress);
  //#

  const handleOnTouchMove = useCreateHandleTouchMoveRight();
  const handleOnDrag = useCreateHandleDragRight();
  const rightSliderValue = useSelector(
    (state) => state.filterSlice.rightSliderValue
  );
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);

  const springs = useSpring({
    from: { x: graphWidth },
    to: { x: rightSliderValue },
    immediate: true,
  });
  useSetRightSliderFirstTime();

  return (
    <animated.div
      className={`rounded-full bg-white ||
        || border-c1 border-solid border-gray-300 cursor-pointer
        || box-shadow-u11 z1000 absolute 
        ${isPress[1] ? "w-c36 h-c36 bottom-c-18" : "w-c32 h-c32 bottom-c-16"}
        `}
      draggable
      style={{ ...springs }}
      onTouchMove={(e) => handleOnTouchMove(e)}
      onDrag={(e) => handleOnDrag(e)}
      onDragStart={(e) => handleOnDragStart(e)}
      //# isPress
      onMouseDown={() => dispatch(setIsPress([false, true]))}
      onMouseUp={() => dispatch(setIsPress([false, false]))}
      onDragEnd={() => dispatch(setIsPress([false, false]))}
    ></animated.div>
  );
}
