import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFirstName } from "../reducer/loginSlice";
import NameTitle from "./nameTitle";
import {  NameItem } from "./nameItem";

export default function FirstNameInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.loginSlice.userInfo.firstName);
  const isLastNameFocus = useSelector(
    (state) => state.loginSlice.isLastNameFocus
  );
  const inputRef = useRef(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleOnBlurr = () => {
    setIsFocused(false);
  };
  const handleOnChange = (e) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    if (
      (regex.test(e.target.value) && e.target.value.length <= 15) ||
      e.target.value === ""
    ) {
      dispatch(setFirstName(e.target.value));
    }
  };

  const handleOnClick = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  return (
    <div
      className={`CONTAINER  || w-calc-plus2 h-c56   || relative ml-c-1 mt-c-1
      flex flex-col justify-start items-start || bg-white
      ${
        isFocused
          ? "px-c10  border-2 border-black222 rounded-md || outline-black222 outline-offset-2 ||    "
          : firstName === "" && isLastNameFocus
          ? "px-c10 border-l-c1 border-t-c1 border-r-c1 border-solid border-gray-400 rounded-t-md  "
          : firstName === "" && !isLastNameFocus
          ? "px-c10 border-c1 border-solid border-gray-400 rounded-t-md  "
          : firstName !== "" && isLastNameFocus
          ? "border-l-c1 border-t-c1 border-r-c1 border-solid border-gray-400 rounded-t-md || padding11 pt-c1 pl-c11"
          : "border-c1 border-solid border-gray-400 rounded-t-md || padding11 pt-c1 pl-c11"
      } `}
      onClick={handleOnClick}
    >
      <NameTitle
        isFocused={isFocused}
        isFirstTime={isFirstTime}
        name={"First name"}
        value={firstName}
      />

      {/* <div
        className={`CONT ||  c-transition2
      ${isFocused || (!isFocused && firstName !== "") ? "" : "opacity-0"}`}
      >
        <input
          type="text"
          placeholder={`${isFocused ? "" : "Phone number"}`}
          value={firstName}
          ref={inputRef}
          onChange={(e) => {
            handleOnChange(e);
          }}
          onBlur={handleOnBlurr}
          className={`${
            isFocused
              ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5"
              : !isFocused && firstName !== ""
              ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || caret-transparent "
              : "hidden  caret-transparent"
          }`}
        />
      </div> */}
      <NameItem
        isFocused={isFocused}
        handleOnBlurr={handleOnBlurr}
        handleOnChange={handleOnChange}
        ref={inputRef}
        value={firstName}
      />
    </div>
  );
}
