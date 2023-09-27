import { toggleIsConfirmOpen } from "../reducer/loginSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ContinueBtnLog() {
  const phoneNumber = useSelector(
    (state) => state.loginSlice.userInfo.phoneNumber
  );
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (phoneNumber.length === 10) {
      dispatch(toggleIsConfirmOpen());
    }
  };

  return (
    <div
      className={`BUTTON || w-full  py-c12 || flex justify-center items-center ||
      weight-800 text-white || rounded-md cursor-pointer
      ${phoneNumber.length!==10 ? "bg-lgrayd" : "main-gradient"}`}
      onClick={handleOnClick}
    >
      Continue
    </div>
  );
}
