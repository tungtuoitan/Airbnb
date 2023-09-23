import { useDispatch, useSelector } from "react-redux";
import { setConfirmRequestOn, setIsNotiOn } from "../reducer/roomsSlice";
import { Link } from "react-scroll";
import NotiContainer from "./notiContainer";
import { setWidthScreen } from "../reducer/header2NavSlice";
export default function XBtn() {
  const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  const isCheckBtn = firstDate.length === 0 || lastDate.length === 0;

  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (!isCheckBtn) {
      dispatch(setConfirmRequestOn())
      dispatch(setWidthScreen())
    }
  };

  return (
    <Link
      to={isCheckBtn ? "calendar" : ""}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      onClick={handleOnClick}
    >
      <button
        className="w-full rounded-lg mb-6 
    py-c12 font-bold text-white color-pink-main px-6"
      >
        {isCheckBtn ? "Check availability" : "Book room"}
      </button>
    </Link>
  );
}
