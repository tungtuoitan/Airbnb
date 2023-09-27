import { useDispatch, useSelector } from "react-redux";
import SwitchUI2 from "./switchUI2";
import SwitchUI3 from "./switchUI3";

export default function Switch3() {
  
  const isTotalPrice = useSelector(
    (s) => s.bodySlice.isTotalPrice
  );
  const ownerValue = isTotalPrice
  return <SwitchUI3 ownerValue={ownerValue} />;
}
