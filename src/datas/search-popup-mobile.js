import BottomBar from "../components/search-popup-mobile/bottom-bar";
import TopBar from "../components/search-popup-mobile/top-bar";
import WhenYourTrip from "../components/search-popup-mobile/whens-your-trip";
import WhereTo from "../components/search-popup-mobile/where-to";
import WhosComing from "../components/search-popup-mobile/whos-coming";
import { useDispatch, useSelector } from "react-redux";
export default function SearchPopUpMoblie() {
  const isSearchPopUpOpen = useSelector((state) => state.isSearchPopUpOpen);

  return (
    <div
      className={`CONTAINER    7:hidden  w-full h-screen bg-f7 
     zmax2 overflow-hidden transition-u2
    ${
      isSearchPopUpOpen === true
        ? " opacity-100 top-0 fixed"
        : "hidden opacity-0 top--200 "
    }`}
    >
      <TopBar />

      <div
        className="MAINN      bg-fb px-c12 pt-c11  h-calc-133  overflow-y-scroll 
       w-full     "
      >
        <div
          className="
        flex justify-between items-center 
       flex flex-col gap-c12 pb-c16"
        >
          <WhereTo />
          <WhenYourTrip />
          <WhosComing />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
