import PriceRange from "./PriceRange";
import Amenities from "./amenities";
import BookingOptions from "./bookingOptions";
import Features from "./accessibilityFeatures";
import PropertyType from "./propertyType";
import TypeOfPlace from "./typeOfPlace";
import BedsAndBathrooms from "./bedsAndBathrooms";
import AccessibilityFeatures from "./accessibilityFeatures";
import FinalPrice from "./finalPrice";
import FirstPart from "./firstPart";
import YourTrips from "./yourTrips";
import TextBySelecting from "./textBySelecting";
import GoodPrice from "./good-price";
import Requiredbtn from "./reservationRequired";
import RequiredBtn from "./reservationRequired";
import GoodPrice2 from "./goodPrice2";

export default function ConfirmBody() {
  return (
    <div className="pb-c80 px-6 7:px-8 11:px-c50 overflow-y-scrollx overscroll-contain">
      <FirstPart />
      <YourTrips />
      <FinalPrice />
      <GoodPrice2/>
      <TextBySelecting/>
      <RequiredBtn/>
    </div>
  );
}
