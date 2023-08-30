import { useDispatch,useSelector } from "react-redux";

export default function EnterTheCode() {
  const phoneNumber = useSelector(state=>state.loginSlice.userInfo.phoneNumber)
  const threePhoneNumber = useSelector(state=>state.loginSlice.threePhoneNumber)
  return (
    <p className="text-left mt-2 text-black222 font-medium  ">
      Enter the code we sent over SMS to{" "}
      <span>
        {threePhoneNumber} <span>{phoneNumber}:</span>
      </span>
    </p>
  );
}
