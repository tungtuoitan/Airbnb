import Adjust from "./adjust";
import TitleOnFilter from "./titleOnFilter";
import ControlByNumber from "./controlByNumber";

export default function PriceRange() {
  return (
    <div className="px-6 ">
      <div
        className="py-6 11:px-10  || border-b-c1 border-solid border-gray-400
      "
      >
        <TitleOnFilter title="Price range" />
        <Adjust />
        <ControlByNumber />
      </div>
    </div>
  );
}
