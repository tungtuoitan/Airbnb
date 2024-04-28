import { useSelector } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { filterWidthTypePlace } from "../function/filterWithTypePlace";
import { filterWithPriceRange } from "../function/filterWithPriceRange";
import { filterWithBeds } from "../function/filterWithBeds";
import { filterWithBedrooms } from "../function/filterWithBedrooms";
import { filterWithBathrooms } from "../function/filterWithBathrooms";
import { filterWithPropertyType } from "../function/filterWithPropertyType";
import { filterWithEssentials } from "../function/filterWithEssentials";
import { filterWithFeatures } from "../function/filterWithFeatures";
import { filterWithLocation } from "../function/filterWithLocation";
import { filterWithBooking } from "../function/filterWithBooking";
import { shuffleNTimes } from "../function/shuffleArray";
import createHomeList from "../function/createHomeList";

export default function useCreateList() {
  const filter = useSelector((state) => state.filterSlice.filter);
  const filter2 = useSelector((state) => state.filterSlice2.filter);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);

console.log("useCreateList runned")
  // const hlByPlaceType = filterWidthTypePlace(filter, homeList);
  //#
  const hlByPlaceType = filterWidthTypePlace(filter, homeList);
  const hlByPrice = filterWithPriceRange(filter, hlByPlaceType);
  const hlByBeds = filterWithBeds(filter, hlByPrice);
  const hlByBedrooms = filterWithBedrooms(filter, hlByBeds);
  const hlByBathrooms = filterWithBathrooms(filter, hlByBedrooms);
  const hlByPropertyType = filterWithPropertyType(filter, hlByBathrooms);
  const hlByEssentials = filterWithEssentials(filter, hlByPropertyType);
  const hlByFeature = filterWithFeatures(filter, hlByEssentials);
  const hlByLocation = filterWithLocation(filter, hlByFeature);
  const hlByBooking = filterWithBooking(filter, hlByLocation);
  const currentHomeList = shuffleNTimes(nTimesShuffle, hlByBooking);
  
  const hlByPlaceType2 = filterWidthTypePlace(filter2, homeList);
  const hlByPrice2 = filterWithPriceRange(filter2, hlByPlaceType2);
  const hlByBeds2 = filterWithBeds(filter2, hlByPrice2);
  const hlByBedrooms2 = filterWithBedrooms(filter2, hlByBeds2);
  const hlByBathrooms2 = filterWithBathrooms(filter2, hlByBedrooms2);
  const hlByPropertyType2 = filterWithPropertyType(filter2, hlByBathrooms2);
  const hlByEssentials2 = filterWithEssentials(filter2, hlByPropertyType2);
  const hlByFeature2 = filterWithFeatures(filter2, hlByEssentials2);
  const hlByLocation2 = filterWithLocation(filter2, hlByFeature2);
  const hlByBooking2 = filterWithBooking(filter2, hlByLocation2);
  const currentHomeList2 = shuffleNTimes(nTimesShuffle, hlByBooking2);
  return {
    homeListByTypePlace: hlByPlaceType2,
    currentHomeList: currentHomeList2,
    homeListForShowXBtn: currentHomeList
  };
}
