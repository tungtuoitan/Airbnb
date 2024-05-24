

import ErrorIcon from "./errorIcon";
import CorrectIcon from "./correctIcon";
import fakeData from "../datas/fake-data";

export default function PhoneNumberTitle({
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

// return(
//   <p
//     className={`CONTENT || w-full || text-left  || c-transition
//         ${
//           isFocused || (!isFocused && value !== "")
//             ? "text-c12 mb-c-2 mt-c5"
//             : "mt-c15 mb-c2"
//         }`}
//   >
//     {isFirstTime ? (
//       "Birthdate"
//     ) : (isFocused && regex.test(value) && regex2.test(value) ) ||
//       (!isFocused && regex.test(value)) && regex2.test(value) ? (
//       <>
//         <span>{name} </span>
//         <CorrectIcon />
//       </>
//     ) : (isFocused && !regex.test(value)) ||
//       (!isFocused && !regex.test(value)) ? (
//       <>
//         <span>{name} </span>
//         <ErrorIcon />
//       </>
//     ) : (
//       "lol"
//     )}
//   </p>)
