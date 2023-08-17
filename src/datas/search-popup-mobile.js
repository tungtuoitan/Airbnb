import BottomBar from "../components/search-popup-mobile/bottom-bar";
import TopBar from "../components/search-popup-mobile/top-bar";
import WhenYourTrip from "../components/search-popup-mobile/whens-your-trip";
import WhereTo from "../components/search-popup-mobile/where-to";
export default function SearchPopUpMoblie() {
  return (
    <div className="CONTAINER    7:hidden  w-full h-screen bg-f7 absolute top-0 zmax2 ">
      <TopBar />

      <div
        className="MAINN  bg-fb px-c12 pt-c11
       w-full    flex justify-between items-center"
      >
        {/* <WhereTo/> */}
        <WhenYourTrip/>
      </div>

      {/* <BottomBar /> */}
    </div>
  );
}
