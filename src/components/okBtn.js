import { useDispatch, useSelector } from "react-redux";
import { setIsNotiOn } from "../reducer/roomsSlice";
import { Link } from "react-router-dom";

export default function Oktn() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsNotiOn());
  };
  return (
    <Link to ='/'
      className={`BUTTON ||  w-full  py-c12 mt-6 ||  flex justify-center items-center
        || weight-800 text-white || rounded-md  cursor-pointer  color-pink-main`}
      onClick={handleOnClick}
    >
      OK
    </Link>
  );
}
