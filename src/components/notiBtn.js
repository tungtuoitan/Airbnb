 import { useDispatch, useSelector } from "react-redux";
import { setIsmessOn } from "../reducer/inboxSlice";

export default function NotiBtn() {
  const isMessOn = useSelector((state) => state.inboxSlice.isMessOn);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setIsmessOn(false));
  };
  return (
    <div
      className={`py-c14 || cursor-pointer
        ${
          isMessOn
            ? "text-gray-500"
            : "text-black222 border-b-c2 border-solid border-black222"
        }`}
      onClick={handleOnClick}
    >
      Notifications
    </div>
  );
}
