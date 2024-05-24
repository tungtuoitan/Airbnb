import { useSelector } from "react-redux";
import MenuItem2 from "./menuItem2";
import { useRef } from "react";
import { useClickOut } from "../hooks/useClickOut";

export default function MenuPopUp2({ contRef }) {
  const itemRef = useRef(null);
  const isMenuOn = useSelector((state) => state.header1Slice.isMenuOn);

  useClickOut(contRef, itemRef);
  return (
    <div
      ref={itemRef}
      className={`bg-white py-2 absolute top-12 right-0  w-60 z1000 box-shadow-u13 rounded-2xl text-sm
      ${isMenuOn ? "" : "hidden"}`}
    >
      <MenuItem2 content={"Wishlists"} />
      <MenuItem2 content={"Messages"} />
      <MenuItem2 content={"Trips"} />
      <div className="w-full h-c1 bg-gray-200"></div>
      <MenuItem2 content={"Help Center"} />
      <MenuItem2 content={"Log out"} />
    </div>
  );
}
