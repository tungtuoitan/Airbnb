import { useDispatch,useSelector } from "react-redux";
import { setFilterDefault,setLeftValue,setRightValue } from "../../reducer/filterSlice";
import useSetRightSliderFirstTime from "../../hooks/useSetSliderRightFirstTime";

export default function ClearAll2() {
  const graphWidth = useSelector(state=>state.filterSlice.graphWidth)

  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(setFilterDefault())
    dispatch(setRightValue(graphWidth))
    dispatch(setLeftValue(0))
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
