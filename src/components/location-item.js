import { useDispatch, useSelector } from "react-redux";
import { actionChangeWhere } from "../actions/action";
import { setNTimesShuffle } from "../reducer/bodySlice";
export default function LocationItem({ item }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      // behavior:'smooth'
    });
    dispatch(actionChangeWhere(item.location));
    dispatch(setNTimesShuffle())
  };
  return (
    <li
      className="text-left font-size14 cursor-pointer "
      onClick={handleOnClick}
    >
      <p className="color222  font-semibold leading-unknown">{item.location}</p>
      <p className="text-gray-600 font-light">{item.homeType}</p>
    </li>
  );
}
