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
    items-center gap-2 p-4 pr-c18 w-22 h-12 border-1 rounded-xl 
   "
      onClick={handleOnClick}
    >
      <FilterIcon />
      <span className="font-size12 font-bold color222">Filters</span>
    </button>
  );
}
