import { useDispatch } from "react-redux";
import { resetDate } from "../reducer/dateItemSlice";

export default function ClearDates() {
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(resetDate());
  };

  return (
    <button
      className=" text-c13  color222 underline font-bold mt-4  "
      onClick={handleClearAll}
    >
      Clear dates
    </button>
  );
}
