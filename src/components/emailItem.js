
import { useEffect, useRef, forwardRef } from "react";
import { useDispatch,useSelector } from "react-redux";

export const EmailItem = forwardRef(({ ...props }, ref) => {
  const { isFocused, handleOnChange,value, handleOnBlurr } = props;

  return (
    <div
      className={`CONT ||  c-transition2
  ${isFocused || (!isFocused && value !== "") ? "" : "opacity-0"}`}
    >
      <input
        type="email"
        value={value}
        ref={ref}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onBlur={handleOnBlurr}
        className={`${
          isFocused
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5"
            : !isFocused && value !== ""
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || caret-transparent "
            : "hidden  caret-transparent"
        }`}
      />
    </div>
  );
});
