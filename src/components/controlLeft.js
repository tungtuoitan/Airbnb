import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleDragLeft from "../hooks/useCreateDragLeft";

export default function ControlLeft() {
  const handleOnDragStart = useCreateHandleDragLeft();
  const controlValueLeft = useSelector(
    (state) => state.filterSlice.controlValueLeft
  );
  const springs = useSpring({
    from: { x: 0 },
    to: { x: controlValueLeft },
  });

  return (
    <animated.div
      className={`w-c32 h-c32 || rounded-full bg-white ||
        || border-c1 border-solid border-gray-300 
        || box-shadow-u11cos t
        || relative top-c-16
        `}
      style={{ ...springs }}
      onTouchMove={(e) => handleOnDragStart(e)}
    />
  );
}
