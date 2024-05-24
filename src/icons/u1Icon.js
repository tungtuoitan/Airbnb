import { useDispatch } from "react-redux";
import { setIsFilterOn } from "../reducer/filterSlice";

export default function U1Icon() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setIsFilterOn())
  }

  return (
    <div 
    onClick={handleOnClick}
    className=" w-9 h-9 rounded-full  flex justify-center align items-center mr-c12 border-1   ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="icon-unknown"
      >
        <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      </svg>
    </div>
  );
}
