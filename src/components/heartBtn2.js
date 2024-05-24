import { useDispatch, useSelector } from "react-redux";
import { setWishId } from "../reducer/wishSlice";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";

export default function HeartBtn2({item}) {
  const i = useContext(IndexContext)
  const dispatch = useDispatch();
  const wishIdArr = useSelector(s=>s.wishSlice.wishIdArr)
  const isAdded = wishIdArr.includes(item)
  const handleOnClick = () => {
    dispatch(setWishId(item));
  };
  return (
    <div onClick={handleOnClick} className=" cursor-pointer pointer-events-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        fill= {`${isAdded ? '#ff385c':'rgb(0,0,0,0.5)'}`}
        className="heart-gray-icon"
      >
        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
      </svg>
    </div>
  );
}
