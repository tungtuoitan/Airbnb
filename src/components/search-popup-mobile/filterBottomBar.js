
import ClearAll2 from "./clearAll2";
import ShowXPlace from "./showXPlace";

export default function FilterBottomBar () {

  return (
    <div
      className="BOTTOM_BAR  7:max-w-c780 w-full h-20 bg-white ||  absolute bottom-0 zmax
         border-top-05px border-solid border-gray-200
         px-6 py-c12 || flex justify-between items-center"
    >
      <ClearAll2 />
      <ShowXPlace/>
    </div>
  );
}
