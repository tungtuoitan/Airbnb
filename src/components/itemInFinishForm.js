import React, { useState, useRef, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

export default function ItemInFinishForm({ content, value, actionCreator }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch()
  useEffect(() => {
    inputRef.current.focus();
  }, [isFocused]);

  const handleOnBlur = () => {
    setIsFocused(false);
  };
  const handleOnChange = (e) => {
    const regex = /^[A-Za-z ]+$/;
    console.log(value)
    if (regex.test(e.target.value)) {
      dispatch(actionCreator(e.target.value))
    }
  };

  const handleOnClick = () => {
    setIsFocused(true);
  };
  return (
    <div
      className={`CONTAINER  || w-full h-c56  px-c10 || 
      flex flex-col justify-start items-start || bg-white
      ${
        isFocused
          ? "  border-2 border-black222 rounded-md box-border || outline-black222 outline-offset-2  "
          : "rounded-lg "
      } `}
      onClick={handleOnClick}
    >
      <p
        className={`CONTENT || w-full || text-left text-gray-500 || c-transition 
      ${isFocused ? "text-c12 mb-c-2 mt-c5" : "mt-c15 mb-c2"}`}
      >
        {content}
      </p>

      <div
        className={`CONT||  c-transition2
      ${isFocused ? "" : "opacity-0"}`}
      >
        <input
          type="text"
          placeholder={`${isFocused ? "" : "Phone number"}`}
          value={value}
          ref={inputRef}
          onChange={(e) => {
            handleOnChange(e);
          }}
          onBlur={handleOnBlur}
          className={`${
            isFocused
              ? "focus:outline-none || text-c16 text-medium text-gray-800 tracking-5 || "
              : "hidden"
          }`}
        />
      </div>
    </div>
  );
}
