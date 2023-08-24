import React from "react";
import TotalPrice from "../components/total-price";
import ContinueExplore from "./continueExplore";
import HomeList from "./homeList";

function Body() {
  return (
    <div
      className={`px-6 pb-10 7:px-10 14:px-20    h-full mt-6  7:mt-c20
        `}
    >
      <div className="GRID-CONTAINER      grid-homepage   w-full   h-auto   7:grid-cols-2  overflow-x-hidden       ">
        <div className="total-price-container  grid 11:grid-cols-4 gap-x-6    ">
          <TotalPrice />
        </div>
        <HomeList />
      </div>
      <ContinueExplore />
    </div>
  );
}

export default Body;
