import PopUpFilter from "./popupFilter";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
    const isFilterOn = useSelector(s=>s.filterSlice.isFilterOn)
    console.log(isFilterOn)
  return (
    <div
      className={`w-full h-full 7:p-10 
        justify-center items-center 
      || absolute top-0 left-0 zmax3 bg-black/50
      ${isFilterOn ? '7:flex':'hidden'}`}
    >
      <PopUpFilter />
    </div>
  );
}
