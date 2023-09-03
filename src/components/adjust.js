import Graph from "./graph";
import LeftSlider from "./leftSlider";
import RightSlider from "./rightSlider";
import useListenResizeForPriceRange from "../hooks/useListenResizeForPriceRange";

export default function Adjust() {
  const contRef = useListenResizeForPriceRange();
  return (
    <div className="CONTAINER relative   " ref={contRef} 
    >
      <Graph />
      <LeftSlider />
      <RightSlider />

    </div>
    
  );
}
