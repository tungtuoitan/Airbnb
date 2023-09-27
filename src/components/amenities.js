import TitleOnFilter from "./titleOnFilter";
import MainAmenities from "./mainAmenities";

export default function Amenities() {
  return (
    <div className="px-6">
      <div className="py-8 border-b-c1 border-gray-300 border-solid">
        <TitleOnFilter title="Amenities" />
        <MainAmenities />
      </div>
    </div>
  );
}
