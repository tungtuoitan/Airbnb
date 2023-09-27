import ErrorIcon from "./errorIcon";
import CorrectIcon from "./correctIcon";
import { useDispatch, useSelector } from "react-redux";

export default function NameTitle({ name, isFocused, isFirstTime, value }) {
  return (
    <p
      className={`CONTENT || w-full || text-left text-gray-500  || c-transition 
        ${
          isFocused || (!isFocused && value !== "")
            ? " text-c12 mb-c-2 mt-c5"
            : "mt-c15 mb-c2"
        }`}
    >
      
       {isFirstTime ? (
        `${name} `
      ) : (isFocused && value !=='') ||
        (!isFocused && value !=='') ? (
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
