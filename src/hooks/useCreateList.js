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
import {useMemo} from "react"

export default function useCreateList() {
  const filter2 = useSelector((state) => state.filterSlice2.filter);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);
  const dependences = [
    filter2.placeType,
    filter2.leftPrice,
    filter2.rightPrice,
    filter2.amountBeds,
    filter2.amountBedrooms,
    filter2.amountBathrooms,
    filter2.bookingOptions,
    filter2.propertyType,
    ...filter2.amenities.essentials,
    ...filter2.amenities.features,
    ...filter2.amenities.location,
    filter2.isDisplayFull,
    filter2.bookingOptions.instantBook,
    filter2.bookingOptions.selfCheckIn,
    nTimesShuffle
  ]

  const currentHomeList2 = useMemo(() => {
  console.log("useCreateList runned", Math.floor(Math.random()*9))
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
  return currentHomeList2

}, dependences)
  
  return {
    currentHomeList: currentHomeList2,
  };
}
