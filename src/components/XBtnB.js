import { useDispatch, useSelector } from "react-redux";
import { setIsNotiOn } from "../reducer/roomsSlice";
import { Link } from "react-scroll";
import NotiContainer from "./notiContainer";

export default function XBtnB() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const isCheckBtn = firstDate.length === 0 || lastDate.length === 0;

  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (!isCheckBtn) {
      dispatch(setIsNotiOn());
    }
  };

  return (
    <Link
      to={isCheckBtn ? "calendar" : ""}
      spy={true}
      smooth={true}
      duration={500}
      offset={-25}
      onClick={handleOnClick}
    >
      <button
        className={`w-full rounded-lg text-sm text350
        py-c12 font-bold text-white color-pink-main px-6`}
      >
        {isCheckBtn ? "Check availability" : "Request Booking"}
      </button>
    </Link>
  );
}
