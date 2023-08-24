import { useDispatch } from "react-redux";
import { actionResetWhere } from "../../actions/action";
import { resetAllOfWho } from "../../reducer/whoComingSlice";
import { resetDate } from "../../reducer/dateItemSlice";

export default function ClearAllBtn() {
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(actionResetWhere());
    dispatch(resetAllOfWho());
    dispatch(resetDate());
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
