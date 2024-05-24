import { useDispatch, useSelector } from "react-redux";
import AmountItemUI from "./amountItemUI";
import {
  setAmountBedrooms,
  setAmountBeds,
  setAmountBathrooms,
} from "../reducer/filterSlice";

export default function AmountItem({ type, amount }) {
  const dispatch = useDispatch();
  let stateValue, action;
  if (type === "Beds") {
    stateValue = useSelector((state) => state.filterSlice.filter.amountBeds);
    action = setAmountBeds;
  } else if (type === "Bedrooms") {
    stateValue = useSelector((state) => state.filterSlice.filter.amountBedrooms);
    action = setAmountBedrooms;
  } else {
    stateValue = useSelector((state) => state.filterSlice.filter.amountBathrooms);
    action = setAmountBathrooms;
  }

  const handleOnClick = () => {
    dispatch(action(amount));
  };

  return <AmountItemUI stateValue={stateValue} amount={amount} handleOnClick={handleOnClick} />;
}
