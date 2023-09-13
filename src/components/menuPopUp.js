import ItemU1 from "./itemU1";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./menuItem";

export default function MenuPopUp() {
  const isMenuOn = useSelector((state) => state.header1Slice.isMenuOn);

  return (
    <div
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
