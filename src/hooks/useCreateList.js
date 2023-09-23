import { useDispatch, useSelector } from "react-redux";
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

export default function useCreateList() {
  const filter = useSelector((state) => state.filterSlice.filter);
  const nTimesShuffle = useSelector((s) => s.bodySlice.nTimesShuffle);

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

  return {
    homeListByTypePlace: hlByPlaceType,
    currentHomeList: currentHomeList,
  };
}
