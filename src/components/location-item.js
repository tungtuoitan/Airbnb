import { useDispatch, useSelector } from "react-redux";
import { actionChangeWhere } from "../actions/action";
import { setNTimesShuffle } from "../reducer/bodySlice";
import { setFilterDefault } from "../reducer/filterSlice";
import { setFilterDefault2 } from "../reducer/filterSlice2";
export default function LocationItem({ item }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      // behavior:'smooth'
    });
    dispatch(actionChangeWhere(item.location));
    dispatch(setNTimesShuffle())
    dispatch(setFilterDefault())
    dispatch(setFilterDefault2())
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
