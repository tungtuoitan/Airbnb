import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLastNameFocus, setLastName } from "../reducer/loginSlice";
import NameTitle from "./nameTitle";
import { NameItem } from "./nameItem";

export default function LastNameInput() {
  const dispatch = useDispatch();
  const [isFirstTime, setIsFirstTime] = useState(true);
  const lastName = useSelector((state) => state.loginSlice.userInfo.lastName);
  const isLastNameFocus = useSelector(
    (state) => state.loginSlice.isLastNameFocus
  );

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [isLastNameFocus]);

  const handleOnBlur = () => {
    dispatch(setIsLastNameFocus(false));
  };
  const handleOnChange = (e) => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    const regex = /^[a-zA-Z\s]+$/;
    if (
      (regex.test(e.target.value) && e.target.value.length <= 15) ||
      e.target.value === ""
    ) {
      dispatch(setLastName(e.target.value));
    }
  };

  const handleOnClick = () => {
    dispatch(setIsLastNameFocus(true));
    inputRef.current.focus();
  };

  return (
    <div
      className={`CONTAINER  || w-calc-plus2 h-c56   || relative ml-c-1 mb-c-1
      flex flex-col justify-start items-start || bg-white
      ${
        isLastNameFocus
          ? "px-c10 mt-c-1 mb-c0  || border-2 border-black222 rounded-md || outline-black222 outline-offset-2 || "
          : lastName === ""
          ? "px-c10 || border-l-c1 border-r-c1 border-b-c1 border-solid border-gray-400 rounded-b-md  "
          : "padding11    || border-l-c1 border-r-c1 border-b-c1 border-solid border-gray-400 rounded-b-md ||  "
      } `}
      onClick={handleOnClick}
    >
      <NameTitle
        isFocused={isLastNameFocus}
        isFirstTime={isFirstTime}
        name={"Last name"}
        value={lastName}
      />

      {/* <div
        className={`CONT ||  c-transition2
      ${
        isLastNameFocus || (!isLastNameFocus && lastName !== "")
          ? ""
          : "opacity-0"
      }`}
      >
        <input
          type="text"
          placeholder={`${isLastNameFocus ? "" : "Phone number"}`}
          value={lastName}
          ref={inputRef}
          onChange={(e) => {
            handleOnChange(e);
          }}
          onBlur={handleOnBlur}
          className={`${
            isLastNameFocus
              ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5"
              : !isLastNameFocus && lastName !== ""
              ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || caret-transparent "
              : "hidden  caret-transparent"
          }`}
        />
      </div> */}
      
      <NameItem
        isFocused={isLastNameFocus}
        handleOnBlurr={handleOnBlur}
        handleOnChange={handleOnChange}
        ref={inputRef}
        value={lastName}
      />
    </div>
  );
}

