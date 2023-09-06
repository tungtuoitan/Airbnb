import { useDispatch } from "react-redux";
import { setFilterDefault } from "../../reducer/filterSlice";

export default function ClearAll2() {
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(setFilterDefault())
  };

  return (
    <button
      className=" font-base color222 underline font-bold h-full "
      onClick={handleClearAll}
    >
      Clear all
    </button>
  );
}
