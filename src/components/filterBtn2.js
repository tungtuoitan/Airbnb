import FilterIcon from "../icons/filter-icon";
import { useDispatch } from "react-redux";
import { setIsFilterOn } from "../reducer/filterSlice";

export default function FilterBtn2() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsFilterOn());
  };
  return (
    <button
      className="bg-white  justify-center hidden 16:flex
    items-center gap-2 p-4 pr-c18 w-22 h-12 rounded-xl hover:border-black222  
    filterbtn      border-gray-300 border-1 border-solid "
      onClick={handleOnClick}
    >
      <FilterIcon />
      <span className="font-size14 font-bold color222 mb-c1 ">Filters</span>
    </button>
  );
}
