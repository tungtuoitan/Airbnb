import Graph from "./graph";
import useListenResizeForPriceRange from "../hooks/useListenResizeForPriceRange";
import ReactSlider from "react-slider";
import { useState } from "react";
import "../styles/reactSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { setLeftValue, setRightValue } from "../reducer/filterSlice";
import useSetRightSliderFirstTime from "../hooks/useSetSliderRightFirstTime";

export default function Adjust() {
  const dispatch = useDispatch();
  const contRef = useListenResizeForPriceRange();
 
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const [value, setValue] = useState([0, 100]);
  const handleRenderThumb = (props, state) => {
    return <div {...props}></div>;
  };
  useSetRightSliderFirstTime();
  return (
    <div className="CONTAINER relative   " ref={contRef}>
      <Graph />

      <ReactSlider
        defaultValue={value}
        onChange={(value, index) => {
          dispatch(setLeftValue((graphWidth / 100) * value[0]));
          dispatch(setRightValue((graphWidth / 100) * value[1]));
        }}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={handleRenderThumb}
        minDistance={6}
      />
    </div>
  );
}
