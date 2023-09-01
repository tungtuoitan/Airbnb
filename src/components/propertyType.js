import ApartmentIcon from "./apartmentIcon";
import HotelIcon from "./hotelIcon";
import HouseIcon from "./houseIcon";
import PropertyTypeItem from "./propertyTypeItem";
import TitleOnFilter from "./titleOnFilter";

export default function PropertyType() {
  return (
    <div className="px-6">
      <div className="py-8 border-b-c1 border-solid border-gray-300 ">
        <TitleOnFilter title="Property type" />
        <div className="grid grid-cols-2 7:grid-cols-4 gap-4 || pt-6">
          <PropertyTypeItem name="House" icon={<HouseIcon />} />
          <PropertyTypeItem name="Apartment" icon={<ApartmentIcon />} />
          <PropertyTypeItem name="Hotel" icon={<HotelIcon />} />
        </div>
      </div>
    </div>
  );
}
