import { useSelector } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { filterWidthTypePlace } from "../function/filterWithTypePlace";
import { useMemo } from "react";

export default function useCreateListByTypePlace() {
  const filter2 = useSelector((state) => state.filterSlice2.filter);

  const dependences = [
    filter2.placeType,
    filter2.leftPrice,
    filter2.rightPrice,
    filter2.amountBeds,
    filter2.amountBedrooms,
    filter2.amountBathrooms,
    filter2.propertyType,
    ...filter2.amenities.essentials,
    ...filter2.amenities.features,
    ...filter2.amenities.location,
    filter2.isDisplayFull,
    filter2.bookingOptions.instantBook,
    filter2.bookingOptions.selfCheckIn,
  ];

  const hlByPlaceType2 = useMemo(
    () => filterWidthTypePlace(filter2, homeList),
    dependences
  );
  return {
    homeListByTypePlace: hlByPlaceType2,
  };
}
