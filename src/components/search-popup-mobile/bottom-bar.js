
import ClearAllBtn from "./clearAllBtn";
import SearchBtn from "./searchBtn";

export default function () {

  return (
    <div
      className="BOTTOM_BAR   absolute bottom-0 w-full   bg-gray-80 
         border-top-05px border-solid border-gray-200
         px-6 py-c12 flex justify-between items-center"
    >
      <ClearAllBtn />
      <SearchBtn />
    </div>
  );
}
