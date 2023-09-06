import PriceBox from "./priceBox";
import { useSelector } from "react-redux";
import useUpdatePrice from "../hooks/useUpdatePrice";

export default function ControlByNumber() {
  useUpdatePrice();

  const leftPrice = useSelector((state) => state.filterSlice.filter.leftPrice);
  const rightPrice = useSelector((state) => state.filterSlice.filter.rightPrice);

  return (
    <div
      className="w-full  
    || flex justify-between items-center gap-6  pt-8 7:pt-12"
    >
      <PriceBox title="Minimum" value={leftPrice} />
      <div className="h-c1 w-10 bg-gray-400 "></div>
      <PriceBox title="Maximum" value={rightPrice} />
    </div>
  );
}
