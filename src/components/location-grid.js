import React, { useRef } from "react";
import PrevBtnOnFooter from "./prev-btn-onfooter.js";
import NextBtnOnFooter from "./next-btn-onfooter.js";
import H2Footer from "./h2-footer.js";
import NavBarFooter from "./navbar-footer.js";
import LocationShortList from "./locationShortList.js";

function LocationGrid() {
  return (
    <>
      {
        <div className="INSPIRATION_FOR_FUTURE_GETAWAYS">
          <div>
            <H2Footer />
            <div className="NAVBAR-CONTAINER     w-full relative  9: ">
              <PrevBtnOnFooter />
              <NavBarFooter />
              <NextBtnOnFooter />
            </div>

            <ul className="ITEMS-GRID      grid grid-cols-2 9:grid-cols-3 11:grid-cols-6 gap-x-2 gap-y-6 pt-8 border-b-1 border-gray-200 pb-12">
              <LocationShortList />
            </ul>
          </div>
        </div>
      }
    </>
  );
}

export default LocationGrid;
