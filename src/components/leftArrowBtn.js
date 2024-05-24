import { useSelector } from "react-redux";
import {useState} from 'react'

export default function LeftArrowBtn() {
  const [isHover,setIsHover] = useState(false)
  const handleMouseEnter = ()=> setIsHover(true)
  const handleMouseLeave = ()=>setIsHover(false)
  const leftArrowDisplay = useSelector(
    (state) => state.header2Nav.leftArrowDisplay
  );
  const handleOnClickLeft = () => {
    $(".hometypebar-container").animate({ scrollLeft: "-=700" }, "slow");
  };

  return (
    <div
      onClick={handleOnClickLeft}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-1 border-gray-400 w-7 h-7 pt-1px pr-1px rounded-full bg-white  
      cursor-pointer 

      ${
        leftArrowDisplay === true
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <i className={`fa-solid fa-angle-left fa-sm
      ${isHover ? 'rotate359':'rotate0'}`}></i>
    </div>
  );
}
