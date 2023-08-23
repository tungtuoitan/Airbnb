import BottomBar from "./search-popup-mobile/bottom-bar";
import TopBar from "./search-popup-mobile/top-bar";
import WhenYourTrip from "./search-popup-mobile/whens-your-trip";
import WhereTo from "./search-popup-mobile/where-to";
import WhosComing from "./search-popup-mobile/whos-coming";
import { useDispatch, useSelector } from "react-redux";

export default function SearchPopUpMoblie() {
  const isSearchPopUpOpen = useSelector(
    (state) => state.root.isSearchPopUpOpen
  );
  const className = {
    container:
      "CONTAINER    7:hidden  w-full h-screen bg-f7 zmax2 overflow-hidden transition-u2 ",
      main: "MAINN      bg-fb px-c12 pt-c11  h-calc-133  overflow-y-scroll w-full     "
  };

  return (
    <div
      className={`${className.container} 
    ${
      isSearchPopUpOpen === true
        ? " opacity-100 top-0 fixed"
        : " opacity-0 hidden top--200 "
    }`}
    >
      <TopBar />

      <div
        className= {className.main}
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
