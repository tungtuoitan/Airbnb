import { Link } from "react-scroll";
import { useState } from "react";

export default function ItemOnBar(props) {
  const {focusOn,setFocusOn, title, offset } = props

  const handleOnClick = () => {
    setFocusOn(title);
  };
  return (
    <Link
      className={`flex items-center h-full cursor-pointer
      text-sm text-black222 font-semibold 
      ${focusOn === title ? "border-b-c4 border-solid border-black222" : ""}`}
      to={title}
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
