import WhoComingItem from "./whocoming-item";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAdults,
  decreaseAdults,
} from "../../reducer/whoComingSlice"; 

export default function AdultsComming() {
  const adults = useSelector((state) => state.whoComing.adults);
  const dispatch = useDispatch();

  return (
    <>
      <WhoComingItem
        item={adults}
        haveBottomLine={true}
        handleDecrease={() => dispatch(decreaseAdults())}
        handleIncrease={() => dispatch(increaseAdults())}
      />
    </>
  );
}
