import { useSpring, animated } from "@react-spring/web";
import useDragginForSlider from "../hooks/useDragginForSlider";

export default function LeftSlider() {
  const [springs, sliderRef, handleOnMouseDown, handleOnMouseUp] =
    useDragginForSlider();

  return (
    <animated.div
      ref={sliderRef}
      className={`w-c32 h-c32 || rounded-full bg-white ||
          || border-c1 border-solid border-gray-300  cursor-pointer 
          || box-shadow-u11
          || relative top-c-16
          `}
      style={{ ...springs }}
      onDrag={(e) => handleOnMouseUp(e)}
    ></animated.div>
  );
}
