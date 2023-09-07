import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleIsLogged } from "../reducer/accSlice";

export default function MenuItemUI2({ content, path, target }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (content === "Log out") dispatch(toggleIsLogged());
  };
  return (
    <Link
      to={path}
      target={target}
      className={`flex items-center || pl-4 h-10 w-full 
    || text-black222 hover:bg-gray-100 cursor-pointer
    ${
      content === "Messages" || content === "Trips" || content === "Wishlists"
        ? "font-bold"
        : ""
    }`}
      onClick={handleOnClick}
    >
      {content}
    </Link>
  );
}
