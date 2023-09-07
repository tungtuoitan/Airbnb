import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MenuItemUI({ content, path, target }) {
  return (
    <Link
      to={path}
      target={target}
      className={`flex items-center || pl-4 h-10 w-full 
    || text-black222 hover:bg-gray-100 cursor-pointer
    ${content === "Sign up" ? "font-bold" : ""}`}
    >
      {content}
    </Link>
  );
}
