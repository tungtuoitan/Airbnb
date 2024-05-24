import { homeList } from "../datas/homeListOriginal";
import { filterWidthTypePlace } from "./filterWithTypePlace";
import { filterWithPriceRange } from "./filterWithPriceRange";
import { filterWithBeds } from "./filterWithBeds";
import { filterWithBedrooms } from "./filterWithBedrooms";
import { filterWithBathrooms } from "./filterWithBathrooms";
import { filterWithPropertyType } from "./filterWithPropertyType";
import { filterWithEssentials } from "./filterWithEssentials";
import { filterWithFeatures } from "./filterWithFeatures";
import { filterWithLocation } from "./filterWithLocation";
import { filterWithBooking } from "./filterWithBooking";
import { shuffleNTimes } from "./shuffleArray";

 function getCurrentHomeList2(filter2, nTimesShuffle) {
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

  return currentHomeList2;
}

export default getCurrentHomeList2
