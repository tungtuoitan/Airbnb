import TextContainer from "./textContainer";
import SearchBox from "./searchBox";
import { useSelector } from "react-redux";
import WherePopUpLaptop from "./wherePopUpLaptop";
import WhenPopUpLaptop from "./whenPopUpLaptop";
import WhoPopUpLaptop from "./whoPopUpLaptop";

export default function MidContainer() {
  const currentPopUp = useSelector((s) => s.searchSlice.currentPopUp);
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div className="h-full flex  items-center flex-col pt-4 w-full absolute top-0 left-0 overflow-visible trans">
      <TextContainer />
      <SearchBox />
      {currentPopUp === "where" && isSearchBigOn && <WherePopUpLaptop />}
      {currentPopUp === "when" && isSearchBigOn && <WhenPopUpLaptop />}
      {currentPopUp === "who" && isSearchBigOn && <WhoPopUpLaptop />}
    </div>
  );
}
