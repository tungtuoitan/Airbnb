import React from "react";
import PrevBtnOnFooter from "./prev-btn-onfooter.js";
import NextBtnOnFooter from "./next-btn-onfooter.js";

import ListLocationType from "./list-location-type.js";
import { useListenFooterNavBar } from "../hooks/useListenFooterNavBar.js";
import { useListenShortList } from "../hooks/useListenShortList.js";

export default function NavBarFooter() {
  

  const { contentRef, navBarRef } = useListenFooterNavBar();
  const nothing = useListenShortList();
  return (
    <div className="NAVBAR-CONTAINER     w-full relative  9: ">
      <PrevBtnOnFooter />

      <div
        id="navbar"
        ref={navBarRef}
        className="NAVBAR        overflow-auto border-b-1 border-gray-200 pb-c10        scrollable-element    overflow-y-hidden  9:flex    "
      >
        <ul
          ref={contentRef}
          className=" inline-flex  relative       font-size14 text-gray7 w-auto font-semibold 9:flex-start "
        >
          <ListLocationType />
        </ul>
      </div>

      <NextBtnOnFooter />
    </div>
  );
}
