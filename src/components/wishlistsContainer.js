import EditBar from "./editBar";
import WishlistsTitle from "./wishListsTitle";
import WishItems from "./wishItems";
import HeaderLoginLaptop from "./headerLoginLaptop";
import DiscoverBtn from "./search-popup-mobile/discoverBtn";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCheckIfContainerHeightIsBiggerWindowHeight } from "../hooks/useCheckIfContainerHeightisBiggerWindowHeight";

export default function WishlistsContainer() {
  const wishLength = useSelector((s) => s.wishSlice.wishLength);

  return (
    <div
      className={`px-6 7:px-10 11:px-20 pt-c12 pb-20 7:pb-20 11:pb-30 
      ${wishLength !== 0 ? "h-full" : "wish"}`}
    >
      {/* <EditBar /> */}
      <WishlistsTitle />
      <WishItems />
    </div>
  );
}
