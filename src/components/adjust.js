import Graph from "./graph";
import ControlLeft from "./controlLeft";
import ControlRight from "./controlRight";
import useListenResizeForPriceRange from "../hooks/useListenResizeForPriceRange";

export default function Adjust() {
  const contRef = useListenResizeForPriceRange();
  return (
    <div className="CONTAINER relative 7:mx-4  " ref={contRef}>
      <Graph />
      <ControlLeft />
      <ControlRight />
    </div>
  );
}
