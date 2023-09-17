import { InputWhere } from "./inputWhere";
import TitleX from "./titleX";
import WherePopUpLaptop from "./wherePopUpLaptop";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPopUp, setIsSearchBigOn } from "../reducer/searchSlice";

export default function Where() {
  const dispatch = useDispatch();
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  const inputRef = useRef(null);
  const handleOnClick = () => {
    inputRef.current.focus();
    dispatch(setCurrentPopUp("where"));
  };
  return (
    <div
      className={`flex justify-center items-start flex-col text-c12
      w-full pl-10 col-start-1 col-end-4 relative rounded-full 
      ${currentPopUp === "where" ? `bg-white  box-shadow-u14 zmax3` : ""}
      ${
        currentPopUp === ""
          ? "hover:bg-gray-200"
          : currentPopUp === "when" || currentPopUp === "who"
          ? "hover:bg-gray-300"
          : ""
      }`}
      onClick={handleOnClick}
    >
      <div className="border-r-c1 border-solid border-gray-300 w-full">
        <TitleX content={"Where"} />
        <InputWhere ref={inputRef} />
      </div>
    </div>
  );
}
