import BathroomsGroup from "./bathroomsGroup";
import TitleOnFilter from "./titleOnFilter";
import Xgroup from './xGroup'

export default function BedsAndBathrooms() {
  return (
    <div className="px-6 ">
      <div className="py-8 || border-b-c1 border-solid border-gray-300">
        <TitleOnFilter title="Rooms and beds" />
        <Xgroup type='Beds' />
        <Xgroup type='Bedrooms' />
        <Xgroup type='Bathrooms' />

      </div>
    </div>
  );
}
