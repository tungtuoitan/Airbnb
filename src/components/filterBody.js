import PriceRange from "./PriceRange";
import Amenities from "./amenities";
import BookingOptions from "./bookingOptions";
import Features from "./accessibilityFeatures";
import PropertyType from "./propertyType";
import TypeOfPlace from "./typeOfPlace";
import BedsAndBathrooms from "./bedsAndBathrooms";
import AccessibilityFeatures from "./accessibilityFeatures";

export default function FilterBody() {
  return (
    <div className="pb-c80">
      <TypeOfPlace />
      <PriceRange />
      <BedsAndBathrooms />
      <PropertyType />
      <Amenities />
      <BookingOptions />
    </div>
  );
}
