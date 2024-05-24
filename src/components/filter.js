import PopUpFilter from "./popupFilter";
import { useSelector } from "react-redux";

export default function Filter() {
  const isFilterOn = useSelector((s) => s.filterSlice.isFilterOn);
  return (
    <div
      className={`w-full h-full 7:p-10 flex justify-center items-end 7:items-center fixed top-0 left-0 zmax3
      ${isFilterOn ? "bg-black/50" : "pointer-events-none  bg-transparent "}`}
    >
      <PopUpFilter />
    </div>
  );
}
