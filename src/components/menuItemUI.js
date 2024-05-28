import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogInFrom } from "../reducer/accSlice";
export default function MenuItemUI({ content, path, target }) {
  const dispatch = useDispatch()
  const handleOnClick = ()=>{
    if(content==='Sign up' ||content==='Log in'){
      dispatch(setLogInFrom('/Airbnb'))
    }
    window.scrollTo(0,0)

  }
  return (
    <Link
      to={path}
      target={target}
      className={`flex items-center || pl-4 h-10 w-full 
    || text-black222 hover:bg-gray-100 cursor-pointer
    ${content === "Sign up" ? "font-bold" : ""}`}
    onClick={handleOnClick}
    >
      {content}
    </Link>
  );
}
