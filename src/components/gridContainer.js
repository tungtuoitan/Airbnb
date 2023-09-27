import React from "react";
import TotalPrice from "../components/total-price";
import HomeList from "./homeList";
import { useDispatch, useSelector } from "react-redux";
import FilterBtn from "./filter-btn";
import FilterBtn2 from "./filterBtn2";
import { useEffect, useRef } from "react";
import { useUpdateWidth } from "../hooks/useUpdateWidth";

export default function GridContainer() {
  const contRef = useRef(null);
  const isScreen16 = useSelector((s) => s.header2Nav.isScreen16);
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
