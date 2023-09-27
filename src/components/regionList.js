import { DestinationItemList2 } from "./search-popup-mobile/destinationItemList2";

export default function RegionList() {
  return (
    <div className="">
      <p className="text-sm font-bold text-black22 text-left mb-c14">Search by Region</p>

      <div className="  grid c-template gap-4 h-c320 overflow-y-scroll overscroll-contain hover:overflow-auto">
        <DestinationItemList2 />
      </div>
    </div>
  );
}
