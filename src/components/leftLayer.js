import { useDispatch, useSelector } from "react-redux";
import { useSpring,animated } from "react-spring";
export default function LeftLayer () {
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const graphHeight = useSelector((state) => state.filterSlice.graphHeight);
  const leftSliderValue = useSelector((state) => state.filterSlice.leftSliderValue);
  const left = leftSliderValue - graphWidth 
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
