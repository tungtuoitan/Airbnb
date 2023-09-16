import LogoIcon from "../icons/logo-icons";
import GrayScreen from "./grayScreen";
import Header1Mobile from "./header1-mobile";
import RightofHeader1 from "./right-header1";
import SearchBig from "./searchBig";
import MidContainer from "./midContainer";
import SearchBox from "./searchBox";
import { useDispatch, useSelector } from "react-redux";

export default function Header1Laptop() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);
  return (
    <div
      className={`px-10 border-b-1 14:px-20 relative transition-all hidden 7:block
      ${isSearchBigOn ? "h-40" : "h-20"}`}
    >
      <div
        className={`w-full xwidth-custom h-20 items-center  
        hidden 7:flex  justify-between relative
        `}
      >
        <LogoIcon />
        <MidContainer />
        <RightofHeader1 />
      </div>
      <GrayScreen />
    </div>
  );
}
