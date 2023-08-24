import BodySearchPopUp from "./BodySearchPopup";
import BottomBar from "./search-popup-mobile/bottom-bar";
import TopBar from "./search-popup-mobile/top-bar";
import { useSelector } from "react-redux";

export default function SearchPopUpMoblie() {
  const isSearchPopUpOpen = useSelector(
    (state) => state.root.isSearchPopUpOpen
  );
  const style = {
    container:
      "CONTAINER    7:hidden  w-full h-screen bg-f7 zmax2 overflow-hidden transition-u2 ",
  };

  return (
    <div
      className={
        style.container +
        (isSearchPopUpOpen === true
          ? " opacity-100 top-0 fixed"
          : " opacity-0 hidden top--200 ")
      }
    >
      <TopBar />
      <BodySearchPopUp />
      <BottomBar />
    </div>
  );
}
