import { useDispatch, useSelector } from "react-redux";
import { setWishId } from "../reducer/wishSlice";

export default function HeartBtn2B() {
  const id = useSelector((s) => s.roomSlice.currentHomeId);
  const wishIdArr = useSelector((s) => s.wishSlice.wishIdArr);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setWishId(id));
  };
  const isOnWishlist = wishIdArr.includes(id);
  return (
    <div
      className=" w-8 h-8 rounded-full cursor-pointer 
              bg-white flex justify-center items-center gap-2 "
      onClick={handleOnClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="heart-icon-2"
        stroke={isOnWishlist ? "#ff385c" : "black"}
        fill={isOnWishlist ? "#ff385c" : "none"}
      >
        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
      </svg>
    </div>
  );
}
