import { useDispatch, useSelector } from "react-redux";
import { setRightPrice, setLeftPrice } from "../reducer/filterSlice";
import { useEffect } from "react";
import useCreateHomeAmount from "./useCreateHomeAmount";

export default function useUpdatePrice() {
  const leftSliderValue = useSelector(
    (state) => state.filterSlice.leftSliderValue
  );
  const rightSliderValue = useSelector(
    (state) => state.filterSlice.rightSliderValue
  );

  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const dispatch = useDispatch();

  const homeAmountByPrice = useCreateHomeAmount()
  const width0 = (graphWidth - 32) / homeAmountByPrice.length; // là width của 1 col
  const indexOfLeftCol = (leftSliderValue / width0).toFixed(0);
  const indexOfRightCol = (rightSliderValue / width0).toFixed(0);
  useEffect(() => {
    dispatch(setLeftPrice(indexOfLeftCol * 25 + 50));
    dispatch(setRightPrice(indexOfRightCol * 25 + 50));
  }, [leftSliderValue, rightSliderValue]);
}
