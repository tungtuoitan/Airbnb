import PriceRange from "./PriceRange";
import Amenilites from "./amenilites";
import BookingOptions from "./bookingOptions";
import Features from "./features";
import PropertyType from "./propertyType";
import TypeOfPlace from "./typeOfPlace";
import BedsAndBathrooms from "./bedsAndBathrooms";

export default function FilterBody() {
  return (
    <div >
      {/* <TypeOfPlace /> */}
      <PriceRange />
      {/* <BedsAndBathrooms />
      <PropertyType />
      <Amenilites /> */}
      {/* <BookingOptions /> */}
      <Features />
    </div>
  );
}
