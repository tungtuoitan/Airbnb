import TextContainer from "./textContainer";
import SearchBig from "./searchBig";
import SearchBox from "./searchBox";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearchBigOn } from "../reducer/searchSlice";

export default function MidContainer() {
  return (
    <div
      className={` h-full flex  items-center flex-col pt-4 w-full 
       absolute top-0 left-0 `}
    >
      <TextContainer />
      <SearchBox />
    </div>
  );
}
