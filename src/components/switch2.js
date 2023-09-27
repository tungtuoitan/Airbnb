import { useDispatch, useSelector } from "react-redux";
import SwitchUI2 from "./switchUI2";

export default function Switch2() {
  
  const isTotalPrice = useSelector(
    (s) => s.bodySlice.isTotalPrice
  );
  const ownerValue = isTotalPrice
  return <SwitchUI2 ownerValue={ownerValue} />;
}
