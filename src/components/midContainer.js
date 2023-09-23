import TextContainer from "./textContainer";
import SearchBig from "./searchBig";
import SearchBox from "./searchBox";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearchBigOn } from "../reducer/searchSlice";
import WherePopUpLaptop from "./wherePopUpLaptop";
import WhenPopUpLaptop from "./whenPopUpLaptop";
import WhoPopUpLaptop from "./whoPopUpLaptop";
import SearchRedBtn3 from "./searchRedBtn3";

export default function MidContainer() {
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div
      className={` h-full flex  items-center flex-col pt-4 w-full
       absolute top-0 left-0 overflow-visible trans`}
    >
      <TextContainer />
      <SearchBox />
      {currentPopUp === "where" && isSearchBigOn ? <WherePopUpLaptop /> : <></>}
      {currentPopUp === "when" && isSearchBigOn ? <WhenPopUpLaptop /> : <></>}
      {currentPopUp === "who" && isSearchBigOn ? <WhoPopUpLaptop /> : <></>}
    </div>
  );
}
