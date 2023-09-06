import { useDispatch, useSelector } from "react-redux";
import useCreateHomeAmount from "../hooks/useCreateHomeAmount";

export default function PriceBox({ title, value }) {
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const leftSliderValue = useSelector(
    (state) => state.filterSlice.leftSliderValue
  );
  const rightSliderValue = useSelector(
    (state) => state.filterSlice.rightSliderValue
  );

  const homeAmountByPrice = useCreateHomeAmount()
  const width0 = (graphWidth - 32) / homeAmountByPrice.length; // là width của 1 col
  const indexOfLeftCol = (leftSliderValue / width0).toFixed(2) - 1

  return (
    <div
      className="w-full h-c56 border-c1 border-solid border-gray-400 
      || rounded-lg px-4 py-c6"
    >
      <p className="text-c12 text-gray-500 text-left">{title}</p>
      <div className="text-left flex gap-2 text-black222 mt-c-2">
        <span>$</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
