import ItemU1 from "./itemU1";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./menuItem";
import MenuItem2 from "./menuItem2";

export default function MenuPopUp2() {
  const isMenuOn = useSelector((state) => state.header1Slice.isMenuOn);

  return (
    <div
      className={`bg-white  || py-2 absolute top-12 right-0  w-60 z1000
      || box-shadow-u8 || rounded-2xl text-sm
      ${isMenuOn ? "" : "hidden"}`}
    >
      <MenuItem2 content={"Wishlists"} />
      <MenuItem2 content={"Messages"} />
      <MenuItem2 content={"Trips"} />
      <div className='w-full h-c1 bg-gray-200'></div>
      {/* <MenuItem2 content={"Account"} /> */}
      <MenuItem2 content={"Help Center"} />
      <MenuItem2 content={"Log out"} />
    </div>
  );
}
