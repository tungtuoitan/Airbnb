import React from "react";
import MiddleFooter from "./middle-footer";
import FinalFooter from "./final-footer";
import LocationGrid from "./location-grid";

  function Footer(){
  
    return (
      <div className={` bg-grayf7 w-full px-6 pt-12 7:px-10 14:px-20 
      pb-c60    pb-10
      `}>
        <div className="FOOTER">
          <LocationGrid />
          <MiddleFooter />
          <FinalFooter />
        </div>
      </div>
    );
  }

export default Footer;
