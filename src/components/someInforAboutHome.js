import React from "react";
import { someInfosAboutHomeArr } from "./someInfosAboutHomeArr";
import InfoItem from "./infoItem";
import { random3Id } from "./random3Id";
import { useDispatch, useSelector } from "react-redux";
export default function SomeThingsAboutHome() {
  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const irArr = random3Id[currentHomeId];

  return (
    <div className="pt-6 11:pt-8 pb-2 11:pb-4    border-b-1 border-solid border-gray-300">
      <InfoItem item={someInfosAboutHomeArr[irArr[0]]} />
      <InfoItem item={someInfosAboutHomeArr[irArr[1]]} />
      <InfoItem item={someInfosAboutHomeArr[irArr[2]]} />
    </div>
  );
}
