import { useDispatch, useSelector } from "react-redux";
import { setWishId } from "../reducer/wishSlice";
import { useContext, useState } from "react";
import { IndexContext } from "../context/indexContext";
import { Link } from "react-router-dom";
import { setHoveringIndex, setIsHoverItem } from "../reducer/bodySlice";

export default function Icon7() {
  const [isHover, setIsHover] = useState(false);
  const i = useContext(IndexContext);
  const dispatch = useDispatch();
  const wishIdArr = useSelector((s) => s.wishSlice.wishIdArr);
  const isLogged = useSelector((s) => s.accSlice.isLogged);
  const isLaptop = useSelector((s) => s.bodySlice.isLaptop);

  const isAdded = wishIdArr.includes(i);
  const handleOnClick = (e) => {
    e.preventDefault();
    if (isLogged) {
      dispatch(setWishId(i));
    } else {
      window.location.href = "/sign-up";
    }
  };
  const handleMouseEnterLeave = () => {
    if(isLaptop){

      setIsHover(!isHover);
      dispatch(setIsHoverItem(true));
      dispatch(setHoveringIndex(i));
    }
  };

  return (
    <div 
    >
      <svg
      name='heart'
       className={`heart-gray-icon cursor-pointer pointer-events-auto `}
      onClick={(e) => handleOnClick(e)}
      onMouseEnter={handleMouseEnterLeave}
      onMouseLeave={handleMouseEnterLeave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        fill={`${
          !isAdded && !isHover
            ? "rgb(0,0,0,0.5)"
            : !isAdded && isHover
            ? "white"
            : isAdded && !isHover
            ? "#e31c5f"
            : "#e31c5f"
        }`}
       
      >
        <path name='heart' d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
      </svg>
    </div>
  );
}
