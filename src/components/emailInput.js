import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail } from "../reducer/loginSlice";
import NameTitle from "./nameTitle";
import { NameItem } from "./nameItem";
import EmailTitle from "./emailTitle";
import { EmailItem } from "./emailItem";
import fakeData from "../datas/fake-data";

export default function EmailInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.loginSlice.userInfo.email);

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
    
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    if(!fakeData.regexCheckEmailChar.test(e.target.value) || e.target.value===''){
        dispatch(setEmail(e.target.value));
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
          : email === ""
          ? "px-c10 border-c1 border-solid border-gray-400  rounded-md  "
          : "border-c1 border-solid border-gray-400  rounded-md || padding11 pt-c1 pl-c11"
      } `}
      onClick={handleOnClick}
    >
      <EmailTitle
        isFocused={isFocused}
        isFirstTime={isFirstTime}
        name={"Email"}
        value={email}
      />
      <EmailItem
        isFocused={isFocused}
        handleOnBlurr={handleOnBlurr}
        handleOnChange={handleOnChange}
        ref={inputRef}
        value={email}
      />
    </div>
  );
}
