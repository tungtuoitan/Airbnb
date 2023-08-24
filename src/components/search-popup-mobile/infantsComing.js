import WhoComingItem from "./whocoming-item";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseInfants,
  decreaseInfants,
} from "../../reducer/whoComingSlice";

export default function InfantsComing (){
    const infants = useSelector((state) => state.whoComing.infants);
  
    const dispatch = useDispatch();
    return (
        <WhoComingItem
          item={infants}
          haveBottomLine={true}
          handleDecrease={() => dispatch(decreaseInfants())}
          handleIncrease={() => dispatch(increaseInfants())}
        />
    )
}