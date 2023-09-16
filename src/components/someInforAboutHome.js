import React from "react";
import { someInfosAboutHomeArr } from "./someInfosAboutHomeArr";
import InfoItem from "./infoItem";
import { useDispatch, useSelector } from "react-redux";
const random3Id = [
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 1],
  [4, 2, 7],
  [6, 0, 3],
  [5, 7, 2],
  [3, 6, 0],
  [7, 1, 4],
  [0, 5, 2],
  [6, 4, 1]
]
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
