import React from "react";
import TotalPrice from "../components/total-price";
import HomeList from "./homeList";

export default function GridContainer() {
  return (
    <div
      className="GRID-CONTAINER      grid-homepage   w-full   h-auto   
    7:grid-cols-2  overflow-x-hidden       "
    >
      <div className="total-price-container  grid 11:grid-cols-4  gap-x-6    ">
        <TotalPrice />
      </div>
      <HomeList />
    </div>
  );
}
