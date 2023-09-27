import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBirthdate, setFirstName } from "../reducer/loginSlice";
import fakeData from "../datas/fake-data";
import BirthdateTitle from "./birthdateTitle";
import { BirthItem } from "./birthItem";

export default function BirthdateInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const dispatch = useDispatch();
  const birthdate = useSelector((state) => state.loginSlice.userInfo.birthdate);
  const myRef = useRef(null);

  // khi click vào container thì sẽ focus vào input
  useEffect(() => {
    if (isFocused) {
      myRef.current.focus();
    }
  }, [isFocused]);

  const handleOnBlurr = () => {
    setIsFocused(false);
  };
  const handleOnChange = (e) => {
    const regex2 = /^[0-9\/]+$/;

    //setFirstTime
    if (isFirstTime) {
      setIsFirstTime(false);
    }

    if (
      (regex2.test(e.target.value) && e.target.value.length <= 10) ||
      e.target.value === ""
    ) {
      dispatch(setBirthdate(e.target.value));
    }
  };

  const handleOnClick = () => {
    setIsFocused(true);
    myRef.current.focus();
  };

  return (
    <div
      className={`CONTAINER  || w-calc-plus2 h-c56   || relative ml-c-1 mt-c-1
      flex flex-col justify-start items-start || bg-white
      ${
        isFocused
          ? `px-c10  border-2 border-black222 rounded-md || 
          outline-black222 outline-offset-2`
          : birthdate === ""
          ? "px-c10 border-c1 border-solid border-gray-400 rounded-md || "
          : `       border-c1 border-solid border-gray-400 rounded-md ||  
          padding11 pt-c1 pl-c11`
      } `}
      onClick={handleOnClick}
    >
      <BirthdateTitle
        name={"Birthdate"}
        isFocused={isFocused}
        value={birthdate}
        isFirstTime={isFirstTime}
        regex={fakeData.regexCheckDate}
        regex2={fakeData.regexCheckSlash}
      />

      <BirthItem
        isFocused={isFocused}
        birthdate={birthdate}
        handleOnChange={handleOnChange}
        handleOnBlurr={handleOnBlurr}
        ref={myRef}
      />
    </div>
  );
}
