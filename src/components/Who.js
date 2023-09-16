import Line from "./line";
import SearchRedBtn from "./searchRedBtn";

export default function Who() {
  return (
    <div className="h-full pl-6 9:pl-c28 text-c12 flex  justify-between items-center 
    flex-none col-start-6 col-end-8">
      <div>
        <div className="text-left text-black222 font-semibold leading-4
        ">
          Who
        </div>
        <p className="whitespace-nowrap text-center text-gray-400">Add guests</p>
      </div>
      <SearchRedBtn/>
    </div>
  );
}
