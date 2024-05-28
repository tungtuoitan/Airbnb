import { useDispatch,useSelector } from "react-redux";
import { toggleIsLogged } from "../reducer/accSlice";
import { Link } from "react-router-dom";
import { setFilterDefault } from "../reducer/filterSlice";
import { setDefaultLoginSlice } from "../reducer/loginSlice";
export default function LogOutBtn() {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    dispatch(toggleIsLogged())
    dispatch(setFilterDefault())
    dispatch(setDefaultLoginSlice())
  }
  return (
    <Link to='/Airbnb'
    onClick = {handleOnClick}
      className="border-c1 border-solid border-black222 
      || w-full h-12 || relative 
      || text-base font-bold text-black222 || rounded-lg 
     || flex justify-center items-center
     || "
    >
      Log out
    </Link>
  );
}
