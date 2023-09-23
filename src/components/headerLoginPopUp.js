import { useSelector } from "react-redux";
import { checkIsLaptop } from "../function/checkIsLaptop";

export default function HeaderLoginPopUp() {
  return (
    <div
      className={`HEADER z100 sticky top-0 || flex justify-center items-center || 
    bg-white || h-16 || border-b-c1 border-solid border-lgray`}
    >
      <span className="text-base weight-800 color222 ">
        {window.location.pathname === "/login" && checkIsLaptop()
          ? "Log in"
          : window.location.pathname === "/sign-up" && !checkIsLaptop()
          ? "Login or Sign up"
          : "Sign up"}
      </span>
    </div>
  );
}
