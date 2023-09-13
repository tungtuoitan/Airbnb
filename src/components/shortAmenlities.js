import React from "react";
import TitleOnRoom from "./titleOnRoom";
import ShowAllBtn from "./showAllBtn";
import AmenlitiesGroup from "./amenlitiesGroup";
import FullAmenlities from "./fullAmenlities";

export default function ShortAmenlities() {
  return (
    <div name='Amenities' className=" pt-6 pb-c34 border-b-1 border-solid border-gray-300">
      <div className="">
        <TitleOnRoom title="What this place offers" />
        <AmenlitiesGroup />
        <ShowAllBtn />
        <FullAmenlities/>
      </div>
    </div>
  );
}
