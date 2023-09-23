import ItemU1 from "./itemU1";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./menuItem";
import { useRef } from "react";
import { useClickOut } from "../hooks/useClickOut";

export default function MenuPopUp({contRef}) {
  const isMenuOn = useSelector((state) => state.header1Slice.isMenuOn);
  const itemRef=useRef(null)
  useClickOut(contRef,itemRef)

  return (
    <div ref={itemRef}
      className={`bg-white  || py-2 absolute top-12 right-0  w-60 z1000
      || box-shadow-u8 || rounded-2xl text-sm
      ${isMenuOn ? "" : "hidden"}`}
    >
      <MenuItem content={'Sign up'}/>
      <MenuItem content={'Log in'}/>
      <MenuItem content={'Help Center'}/>


    </div>
  );
}
