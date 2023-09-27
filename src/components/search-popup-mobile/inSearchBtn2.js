import { SearchIcon } from "../../icons/search-icon";

export default function InSearchBtn2() {
  return (
    <div
      className="flex  justify-center items-center gap-c10"
    >
      <div className="mt-c2">
        <SearchIcon />
      </div>
      <span className="text-white font-bold ">Search</span>
    </div>
  );
}
