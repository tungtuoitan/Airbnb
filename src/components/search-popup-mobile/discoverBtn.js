import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogInFrom } from "../../reducer/accSlice";

export default function DiscoverBtn() {
  const handleOnClick = ()=>{
     window.scrollTo(0, 0);
  }
  return (
    <Link
      to={'/'}
      className=" main-gradient || w-c150 h-12 || rounded-lg 
      || flex justify-center items-center "
      onClick={handleOnClick}
    >
      <div className="inline-flex  justify-center items-center || gap-c10 ">
        <span className="text-white font-bold  whitespace-nowrap">Discover more</span>
      </div>
    </Link>
  );
}
