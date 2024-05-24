import { useDispatch } from "react-redux";
import { setIsAmenlitiesOn } from "../reducer/roomsSlice";

export default function ShowAllBtn() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsAmenlitiesOn());
  };

  return (
    <button
      className="w-full rounded-lg  border-1 border-gray-700 
    py-c12 font-bold color222"
      onClick={handleOnClick}
    >
      Show all 37 amenities
    </button>
  );
}
