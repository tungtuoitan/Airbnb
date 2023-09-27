import BodySearchPopUp from "./BodySearchPopup";
import BottomBar from "./search-popup-mobile/bottom-bar";
import TopBar from "./search-popup-mobile/top-bar";
import { useSelector } from "react-redux";

export default function SearchPopUpMoblie() {
  const isSearchPopUpOpen = useSelector(
    (state) => state.root.isSearchPopUpOpen
  );
  const style = {
    container:`7:hidden   w-full h-screen bg-f7 zmax2 overflow-hidden transition-u2x
    overscroll-contain   `,
  };

  return (
    <div
      className={
        style.container +
        (isSearchPopUpOpen
          ? " top-0 fixed transition-u2"
          : " opacity fixed  hiddenx hp1 ")
          
      }
    >
      <TopBar />
      <BodySearchPopUp />
      <BottomBar />
    </div>
  );
}
