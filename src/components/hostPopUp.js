import React from "react";
import LeftHostPopUp from "./leftHostPopup";
import RightHostPopUp from "./rightHostPopUp";

export default function HostPopUp() {
  return (
    <div
      className=" w-full py-8   bg-white   "
    >
      <div className="flex justify-start ">
          <LeftHostPopUp  />
          <RightHostPopUp  />
      </div>
    </div>
  );
}
