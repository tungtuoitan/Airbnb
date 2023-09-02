import { useDispatch, useSelector } from "react-redux";
import { useSpring,animated } from "react-spring";

export default function RightLayer () {
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const graphHeight = useSelector((state) => state.filterSlice.graphHeight);
  const rightSliderValue = useSelector((state) => state.filterSlice.rightSliderValue);
  const left = rightSliderValue
  const springs = useSpring({
    from: { x: graphWidth },
    to: { x: left },
});



  return (
    <animated.div
      style={{
        width: `${graphWidth}px`,
        height: `${graphHeight}px`,
        background: "white",
        opacity: 0.8,
        position: 'absolute',
        bottom:0,
        ...springs
      }}
    />
  );
};
