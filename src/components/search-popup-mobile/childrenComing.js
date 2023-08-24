  import WhoComingItem from "./whocoming-item";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseChildrens,
  decreaseChildrens,
} from "../../reducer/whoComingSlice";

export default function ChildrenComming() {
  const children = useSelector((state) => state.whoComing.children);
  const dispatch = useDispatch();
 

  return (
    <>
    <WhoComingItem
          item={children}
          haveBottomLine={true}
          handleDecrease={() => dispatch(decreaseChildrens())}
          handleIncrease={() => dispatch(increaseChildrens())}
        /> 
    </>
  );
}
