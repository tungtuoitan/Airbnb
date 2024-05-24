import PlaceType from "./placeType";
import TextSearchRoom from "./textSearchRoom";
import TitleOnFilter from "./titleOnFilter";

export default function TypeOfPlace() {
  return (
    <div className="px-6">
      <div className="py-6 border-b-c1 border-solid border-gray-200 ">
        <TitleOnFilter title="Type of place" />
        <TextSearchRoom/>
        <PlaceType />
      </div>
    </div>
  );
}
