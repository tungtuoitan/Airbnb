

import ErrorIcon from "./errorIcon";
import CorrectIcon from "./correctIcon";
import fakeData from "../datas/fake-data";

export default function MinimumTitle({
  name,
  value,
  isFocused,
  isFirstTime,
  
}) {
  return (
    <p
      // className={`CONTENT || w-full || text-left  || c-transition 
      //   ${
      //     isFocused || (!isFocused && value !== "")
      //       ? "text-c12 mb-c-2 mt-c5"
      //       : "mt-c15 mb-c2"
      //   }`}
        className={`CONTENT || w-full || text-left text-gray-500 || c-transition 
      ${
        isFocused || (!isFocused && value !== "")
          ? "text-c12 mb-c-2 mt-c5"
          : "mt-c15 mb-c2"
      }`}
    >
      {isFirstTime ? (
      'Phone number'
      ) : (isFocused && value.length===10) ||
        (!isFocused && value.length===10) ? (
        <>
          <span>{name} </span>
          <CorrectIcon />
        </>
      ) : (
        <>
          <span>{name} </span>
          <ErrorIcon />
        </>
      )}
    </p>
  );
}
