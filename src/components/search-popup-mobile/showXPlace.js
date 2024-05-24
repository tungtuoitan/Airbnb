import useCreateListForShowXBtn from "../../hooks/useCreateListForShowXBtn";
import { useDispatch, useSelector } from "react-redux";
import { setIsFilterOn } from "../../reducer/filterSlice";
import { Link } from "react-router-dom";
import { setDisplayingIndex } from "../../reducer/header2Slice";
import { setUpdateFilter2 } from "../../reducer/filterSlice2";
import { setCurrentList } from "../../reducer/bodySlice";

export default function ShowXPlace() {
  const dispatch = useDispatch();
  const homeListForShowXBtn = useCreateListForShowXBtn().homeListForShowXBtn;
  const filter = useSelector((s) => s.filterSlice.filter);

  const content =
    homeListForShowXBtn.length === 0
      ? "No exact matches"
      : `Show ${homeListForShowXBtn.length} place`;

  const handleOnClick = () => {
    if (homeListForShowXBtn.length !== 0) {
      dispatch(setIsFilterOn());
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(setDisplayingIndex(999));
      dispatch(setUpdateFilter2(filter));
      dispatch(setCurrentList(homeListForShowXBtn))
    }
  };
  return (
    <Link
      to="/"
      className=" bg-black222 h-12 px-c24 flex justify-center items-center rounded-lg"
      onClick={handleOnClick}
    >
      <div className="flex  justify-center items-center text-white font-bold whitespace-nowrap ">
        <span>{content}</span>
      </div>
    </Link>
  );
}
