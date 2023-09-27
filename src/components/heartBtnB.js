import HeartIcon from "./heartIcon";
import { useDispatch, useSelector } from "react-redux";
import { setWishId } from "../reducer/wishSlice";

export default function HeartBtnB() {
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const dispatch = useDispatch();
  const wishIdArr = useSelector(state=>state.wishSlice.wishIdArr)
  const isOnWishList = wishIdArr.includes(currentHomeId)
  const handleOnClick = () => {
    dispatch(setWishId(currentHomeId));
  };

  return (
    <a className="flex items-center gap-2" onClick={handleOnClick}>
      <HeartIcon isOn={isOnWishList}/>
      <span>Save</span>
    </a>
  );
}
