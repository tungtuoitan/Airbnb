import ErrorIcon from "./errorIcon";
import CorrectIcon from "./correctIcon";
import { useDispatch, useSelector } from "react-redux";
import fakeData from "../datas/fake-data";

export default function EmailTitle({ name, isFocused, isFirstTime, value }) {
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
      ) : (isFocused && fakeData.regexCheckEmail.test(value)) ||
        (!isFocused && fakeData.regexCheckEmail.test(value)) ? (
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
