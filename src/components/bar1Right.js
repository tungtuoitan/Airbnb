import Icon8 from "./icon8";
import { useDispatch, useSelector } from "react-redux";
import InboxPopUp from "./inboxPopUp";
import InboxTitle from "./inboxTitle";
import { setCurrentChoice, toggleIsPopUpOn } from "../reducer/inboxSlice";

export default function Bar1Right() {
  const dispatch = useDispatch();
  const isMessOn = useSelector((state) => state.inboxSlice.isMessOn);
  const isPopUpOn = useSelector((state) => state.inboxSlice.isPopUpOn);

  const handleOnClick = () => {
    dispatch(toggleIsPopUpOn());
  };

  return (
    <div
      className={`w-10 h-10 pt-c2 relative || flex justify-center items-center 
        || hover:bg-gray-200 rounded-full cursor-pointer
        ${isMessOn ? "" : "hidden"}`}
      onClick={handleOnClick}
    >
      <Icon8 />
      <InboxPopUp />
    </div>
  );
}
