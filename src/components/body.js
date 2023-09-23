import React from "react";
import ContinueExplore from "./continueExplore";
import GridContainer from "./gridContainer";
import SliderTry from "./sliderTry";
import createHomeList from "../function/createHomeList";

function Body() {
  
  return (
    <div
      className={`px-6 pb-10 7:px-10 14:px-20    h-full mt-6  7:mt-0 
        `}
    >
     
      <GridContainer />
      <ContinueExplore />
    </div>
  );
}

export default Body;
