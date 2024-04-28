import React from "react";
import TotalPrice from "../components/total-price";
import HomeList from "./homeList";
import { useRef } from "react";
import { useUpdateWidth } from "../hooks/useUpdateWidth";

export default function GridContainer() {
  const contRef = useRef(null);
    useUpdateWidth(contRef);

  return (
    <div
      ref={contRef}
      className="grid-homepage    w-full  h-auto  overflow-x-hiddenx  "
    >
      <div className="  gap-x-6  grid-containerprice w-full hidden 7:grid ">
        <TotalPrice />
      </div>
      <HomeList />
    </div>
  );
}
