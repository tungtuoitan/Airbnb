import { useEffect, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PhoneItem = forwardRef(({ ...props }, ref) => {
  const { isFocused, handleOnChange, handleOnBlur } = props;
  const phoneNumber = useSelector(
    (state) => state.loginSlice.userInfo.phoneNumber
  );
  const threePhoneNumber = useSelector(
    (state) => state.loginSlice.threePhoneNumber
  );
  return (
    <div
      className={`CONT ||  c-transition2
  ${isFocused || (!isFocused && phoneNumber !== "") ? "" : "opacity-0"}`}
    >
      <span
        className={` text-c16 ${
          isFocused || (!isFocused && phoneNumber !== "") ? "mr-c6 " : " hidden"
        }
    ${phoneNumber === "" ? "text-gray-300" : "text-gray-800"}`}
      >
        {threePhoneNumber}
      </span>
      <input
        type="text"
        placeholder={`${isFocused ? "" : "Phone number"}`}
        value={phoneNumber}
        ref={ref}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onBlur={handleOnBlur}
        className={`${
          isFocused
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5"
            : !isFocused && phoneNumber !== ""
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || caret-transparent "
            : "hidden  caret-transparent"
        }`}
      />
    </div>
  );
});
