import { useEffect, useRef, forwardRef } from "react";

export const BirthItem = forwardRef(({ ...props }, ref) => {
  const { isFocused, birthdate, handleOnChange, handleOnBlurr } = props;

  return (
    <div
      className={`CONT ||  c-transition2
        ${isFocused || (!isFocused && birthdate !== "") ? "" : "opacity-0"}`}
    >
      <input
        type="text"
        placeholder={`${isFocused ? "Date / Month / Year" : ""}`}
        value={birthdate}
        ref={ref}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onBlur={handleOnBlurr}
        className={`${
          isFocused
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5"
            : !isFocused && birthdate !== ""
            ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || caret-transparent "
            : "hidden  caret-transparent"
        }`}
      />
    </div>
  );
});
