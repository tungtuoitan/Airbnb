import { useDispatch,useSelector } from "react-redux";
import { actionSearchPopUp } from "../../actions/action";
import { Link } from "react-router-dom";
import InSearchBtn2 from "./inSearchBtn2";
import { setNTimesShuffle } from "../../reducer/bodySlice";
import { shuffleArray } from "../../function/shuffleArray";
import { setDisplayingIndex } from "../../reducer/header2Slice";
import { setFilterDefault } from "../../reducer/filterSlice";
import { setFilterDefault2 } from "../../reducer/filterSlice2";

export default function () {
  const dispatch = useDispatch();
  const nTimesShuffle = useSelector(s=>s.bodySlice.nTimesShuffle)
  const handleSearch = () => {
    dispatch(setNTimesShuffle())
    dispatch(actionSearchPopUp());
    dispatch(setDisplayingIndex(999))
    dispatch(setFilterDefault())
    dispatch(setFilterDefault2())
    window.scrollTo(0,0)
    if(nTimesShuffle===1){
      alert(
        "Vì data mẫu có hạn nên kết quả tìm kiếm sẽ không khớp, mong quý khách thông cảm."
      );
    }
  };

  return (
    <Link
      to="/"
      className=" main-gradient w-32 h-12 rounded-lg border1 flex justify-center 
      items-center"
      onClick={handleSearch}
    >
      <InSearchBtn2 />
    </Link>
  );
}
