import {useDispatch,useSelector} from 'react-redux'
import { useState } from "react";


export default function RightArrowBtn() {
  const [isHover,setIsHover] = useState(false)
  const handleMouseEnter = ()=> setIsHover(true)
  const handleMouseLeave = ()=>setIsHover(false)
    const rightArrowDisplay = useSelector(state=>state.header2Nav.rightArrowDisplay)
  const handleOnClickRight = () => {
    $(".hometypebar-container").animate({ scrollLeft: "+=700" }, "slow");
  };

  return (
    <div
      onClick={handleOnClickRight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-white color222 border-1 pt-1px border-gray-400 w-7 h-7 rounded-full bg-white ${
        rightArrowDisplay === true
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <i className={`fa-solid fa-angle-right fa-sm 
      ${isHover ? 'rotate359':'rotate0'}`}></i>
    </div>
  );
}
