import LogoIcon from "../icons/logo-icons";
import GrayScreen from "./grayScreen";
import Header1Mobile from "./header1-mobile";
import Header1Bottom from "./header1Bottom";
import Header1Top from './header1Top'
import RightofHeader1 from "./right-header1";
import SearchBig from "./searchBig";
import SearchSmall from "./searchSmall";
import { useDispatch, useSelector } from "react-redux";

function Header1() {
  const isSearchBigOn = useSelector((s) => s.searchSlice.isSearchBigOn);

  return (
    <div className={`fixed top-0  zmax bg-white w-full `}>
      <div
        className={`px-10 border-b-1 14:px-20 relative 
      ${isSearchBigOn ? "h-40" : "h-20"}`}
      >
        <Header1Top/>
        <Header1Bottom/>
      </div>

      <Header1Mobile />
    </div>
  );
}

export default Header1;
