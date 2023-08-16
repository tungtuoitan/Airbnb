import React, { useState } from "react";
import hometypeArr from "../datas/home-types.js";



const HometypeBar = React.forwardRef((props, ref) => {

  const [displayingIndex, setDisplayinIndex] = useState(0);
  const handleOnClick = (index) => {
    setDisplayinIndex(index);
  };


  return (
    <div 
    ref={ref}
    className={`HOME_TYPE_BAR     header2    relative   overflow-x-scroll  hometypebar-container 
    `}>
      {/* ${props.isScrollTop0===true ? '7:pt-5 ' : '7:pt-c4'} */}
      <div
        
        className="FULL_WIDTH_CONTAINER  pl-6 7:pl-0  inline-flex gap-5   7:gap-10   relative hometypebar   "
      >
        {hometypeArr.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                handleOnClick(index);
              }}
              className={` ITEM    cursor-pointer pt-c15 pb-c11 7:pt-c18 7:pb-c14 inline-flex flex-col items-center   ${
                index === displayingIndex
                  ? "color222 border-bottom-unknown"
                  : ""
              }  `}
            >
              <img
                src={item.path}
                className={`w-6 h-6  ${
                  index === displayingIndex ? "opacity-100 " : "opacity-60"
                }`}
              />
              <span
                className={`      text-c12 text-gray7 text-12 font-semibold mt-c5 whitespace-nowrap  ${
                  index === displayingIndex ? "color222 " : ""
                }   `}
              >
                {item.name}
              </span>
            </div>
          );
        })}
        <div className='h-full 7:w-c82'></div>
      </div>
    </div>
  );
});

export default HometypeBar;
