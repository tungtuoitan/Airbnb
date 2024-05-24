import FilterIcon from "../icons/filter-icon";
import { useDispatch } from "react-redux";
import { setIsFilterOn } from "../reducer/filterSlice";

export default function FilterBtn() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsFilterOn());
  };
  return (
    <button
      className="FILTER  bg-white  flex justify-center 
    items-center gap-2 p-4 pr-c18 w-22 h-12  
    rounded-xl border-c1 border-gray-300 border-solid
    hover:border-black222
   "
      onClick={handleOnClick}
    >
      <FilterIcon />
      <span className="font-size12 font-bold color222">Filters</span>
    </button>
  );
}
