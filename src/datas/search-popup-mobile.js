import BottomBar from "../components/search-popup-mobile/bottom-bar";
import TopBar from "../components/search-popup-mobile/top-bar";
import WhenYourTrip from "../components/search-popup-mobile/whens-your-trip";
import WhereTo from "../components/search-popup-mobile/where-to";
import WhosComing from "../components/search-popup-mobile/whos-coming";
export default function SearchPopUpMoblie() {
  return (
    <div className="CONTAINER    7:hidden  w-full h-screen bg-f7 absolute top-0 zmax2 overflow-hidden ">
      <TopBar />

      <div
        className="MAINN      bg-fb px-c12 pt-c11  h-calc-133  overflow-y-scroll 
       w-full     "
      >
        <div className="
        flex justify-between items-center 
       flex flex-col gap-c12 ">

        <WhereTo/>
        <WhenYourTrip/>
        <WhosComing/>
        </div>

      </div>

      <BottomBar />
    </div>
  );
}
