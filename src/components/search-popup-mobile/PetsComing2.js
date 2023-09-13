import WhoComingItem from "./whocoming-item";
import { useSelector, useDispatch } from "react-redux";
import {
  increasePets,
  decreasePets,
} from "../../reducer/whoComingSlice";

export default function PetsComing2 () {
    const pets = useSelector((state) => state.whoComing.pets);
    const dispatch = useDispatch();
  return (
    <WhoComingItem
      item={pets}
      haveBottomLine={true}
      handleDecrease={() => dispatch(decreasePets())}
      handleIncrease={() => dispatch(increasePets())}
    />
  );
}
