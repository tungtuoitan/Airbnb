import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePhoneNumber } from "../reducer/loginSlice";
import PhoneNumberTitle from "./phoneNumberTitle";
import { PhoneItem } from "./phoneItem";

export default function ItemInForm({ content }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state) => state.loginSlice.userInfo.phoneNumber
  );
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [isFocused]);

  const handleOnBlur = () => {
    setIsFocused(false);
  };
  const handleOnChange = (e) => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    if (
      !isNaN(Number(e.target.value)) &&
      e.target.value.length <= 10 &&
      !/\s/.test(e.target.value)
    ) {
      dispatch(changePhoneNumber(e.target.value));
    }
  };

  const handleOnClick = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  return (
    <div
      className={`CONTAINER  || w-full h-c56   || 
      flex flex-col justify-start items-start || bg-white cursor-pointer
      ${
        isFocused
          ? "px-c10  border-2 border-black222 rounded-md || outline-black222 outline-offset-2  "
          : phoneNumber === ""
          ? "px-c10 border-c1 border-solid border-gray-400 rounded-b-md  "
          : "border-c1 border-solid border-gray-400 rounded-b-md || padding11 pt-c1 pl-c11"
      } `}
      onClick={handleOnClick}
    >
      <PhoneNumberTitle
        name={"Phone number"}
        value={phoneNumber}
        isFocused={isFocused}
        isFirstTime={isFirstTime}
      />
      <PhoneItem
        isFocused={isFocused}
        handleOnChange={handleOnChange}
        handleOnBlur={handleOnBlur}
        ref={inputRef}
      />
    </div>
  );
}
