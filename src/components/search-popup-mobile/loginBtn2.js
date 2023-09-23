import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogInFrom } from "../../reducer/accSlice";

export default function LoginBtn2() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(setLogInFrom('/wishlists'))
  }
  return (
    <Link
      to={'/sign-up'}
      className=" main-gradient || w-c92 h-12 || rounded-lg 
      || flex justify-center items-center "
      onClick={handleOnClick}
    >
      <div className="flex  justify-center items-center || gap-c10 ">
        <span className="text-white font-bold ">Log in</span>
      </div>
    </Link>
  );
}
