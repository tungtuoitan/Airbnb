import { Link } from "react-scroll";
import { useState } from "react";

export default function ItemOnBar(props) {
  const { focusOn, setFocusOn, title, offset } = props;

  const handleOnClick = () => {
    setFocusOn(title);
  };
  return (
    <Link
      className={`flex items-center h-full cursor-pointer 
      text-sm text-black222 font-semibold pt-c6
      hover:border-black222 border-b-c4 border-solid
       border-t-transparent border-l-transparent border-r-transparent
      ${
        focusOn === title
          ? "border-b-c4 pt-c4 border-solid border-black222"
          : "border-transparent"
      }`}
      to={
        title === "Who's Coming"
          ? "whosComing"
          : title === "About Your Host"
          ? "meetYourHost"
          : title
      }
      spy={true}
      smooth={true}
      duration={500}
      offset={offset}
      onClick={handleOnClick}
    >
      {title}
    </Link>
  );
}
