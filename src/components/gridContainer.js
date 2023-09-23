import React from "react";
import TotalPrice from "../components/total-price";
import HomeList from "./homeList";
import { useDispatch,useSelector } from "react-redux";
import FilterBtn from "./filter-btn";
import FilterBtn2 from "./filterBtn2";

export default function GridContainer() {
  const isScreen16 = useSelector(s=>s.header2Nav.isScreen16)
  return (
    <div
      className="grid-homepage   w-full  h-auto  overflow-x-hiddenx  "
    >
      <div className="  gap-x-6  grid-containerprice w-full hidden 7:grid">
        <TotalPrice />
        {isScreen16 ? (<FilterBtn2/>):<></>}
      </div>
      <HomeList />
    </div>
  );
}
