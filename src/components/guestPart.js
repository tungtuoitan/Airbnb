import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function GuestPart() {
  const whoComing = useSelector((s) => s.whoComing);
 
  let amount =
    whoComing.adults.amount +
    whoComing.children.amount +
    whoComing.infants.amount +
    whoComing.pets.amount;

  return (
    <Link
      to={"whosComing"}
      spy={true}
      smooth={true}
      duration={500}
      offset={-80}
      className="relative h-c52 px-c12 pt-c8 pb-c12 flex flex-col
    "
    >
      <span className="text-left text-black222 text-c9 font-extrabold mb-c-1">
        'GUESTS'
      </span>
      <span className="text-left text-gray-400 text-c14 ">{amount} guests</span>
    </Link>
  );
}
