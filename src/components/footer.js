import React from "react";
import MiddleFooter from "./middle-footer";
import FinalFooter from "./final-footer";
import LocationGrid from "./location-grid";

  function Footer(){
  
    return (
      <div className={`FOOTER_CONTAINER bg-grayf7 w-full px-6 py-12 7:px-10 14:px-20
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
