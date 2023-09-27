import React from "react";
import ListHomeType from "./list-hometype.js";
import Emty2 from "./emty2.js";

const HometypeBar = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`header2 relative   overflow-x-scroll  hometypebar-container 
    `}
    >
      <div
        className="FULL_WIDTH_CONTAINER  pl-6 7:pl-0  
      inline-flex gap-5 7:gap-10   relative hometypebar   "
      >
        <ListHomeType />
        <Emty2 />
      </div>
    </div>
  );
});

export default HometypeBar;
