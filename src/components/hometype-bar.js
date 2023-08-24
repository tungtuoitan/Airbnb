import React from "react";
import { useSelector } from "react-redux";
import ListHomeType from "./list-hometype.js";

const HometypeBar = React.forwardRef((props, ref) => {

  return (
    <div
      ref={ref}
      className={`HOME_TYPE_BAR     header2    relative   overflow-x-scroll  hometypebar-container 
    `}
    >
      <div className="FULL_WIDTH_CONTAINER  pl-6 7:pl-0  inline-flex gap-5   7:gap-10   relative hometypebar   ">
        <ListHomeType />
        <div className="h-full 7:w-c82"></div>
      </div>
    </div>
  );
});

export default HometypeBar;
