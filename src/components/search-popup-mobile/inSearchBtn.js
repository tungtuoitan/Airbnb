import { useDispatch } from "react-redux";
import { actionSearchPopUp } from "../../actions/action";
import { SearchIcon } from "../../icons/search-icon";

export default function InSearchBtn() {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(actionSearchPopUp());
  };
  return (
    <div
      className="flex  justify-center items-center gap-c10"
      onClick={handleSearch}
    >
      <div className="mt-c2">
        <SearchIcon />
      </div>
      <span className="text-white font-bold ">Search</span>
    </div>
  );
}
