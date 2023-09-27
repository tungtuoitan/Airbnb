import { useDispatch } from "react-redux";
import { setIsShowFullImgOn } from "../reducer/roomsSlice";

export default function BackIcon2() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{ 
    dispatch(setIsShowFullImgOn())
    window.scrollTo(0,0)
  }
  return (
    <div onClick = {handleOnClick}
      className=" w-8 h-8 rounded-full cursor-pointer
            bg-white flex justify-center items-center gap-2  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="Back"
        role="img"
        focusable="false"
        className="left-arrow-icon"
      >
        <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
      </svg>
    </div>
  );
}
