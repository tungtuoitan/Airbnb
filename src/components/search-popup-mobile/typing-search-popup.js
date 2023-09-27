import { useDispatch, useSelector } from "react-redux";
import DestinationItem2 from "./destination-item2";
import InputTypingSearch from "./inputTypingSearch";
import SearchIcon5 from "./searchIcon5";

export default function TypingSearchPopup() {
  const isTypingSearchPopUpOpen = useSelector(
    (state) => state.root.isTypingSearchPopUpOpen
  );

  return (
    <div
      className={`w-screen h-calc-u2 bg-white fixed bottom-0 left-0 zmax3 
        rounded-2xl box-shadow-u5 rounded-4xl px-6 pt-10
        ${isTypingSearchPopUpOpen === true ? "" : "hidden"}`}
    >
      <div
        className="INPUT_CONTAINER      h-c60 rounded-xl  bg-grayf7 
          relative mb-6"
      >
        <SearchIcon5 />
        <InputTypingSearch />
      </div>
      <DestinationItem2 />
    </div>
  );
}
