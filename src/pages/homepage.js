import React, { lazy, Suspense } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";

import Header2 from "../components/header2";
import Header1 from "../components/header1";
import Body from "../components/body";
import DivBonus1 from "../components/divBonus1";

const Filter = lazy(() => import("../components/filter"));
const Footer = lazy(() => import("../components/footer.js"));
const SearchPopUpMoblie = lazy(() => import("../components/search-popup-mobile"));

function HomePage() {
  function callback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    console.log(`:::::Component ${id} was rendered in phase: ${phase}`);
    // console.log(`Actual duration: ${actualDuration}ms`);
    // console.log(`Base duration: ${baseDuration}ms`);
    // console.log(`Start time: ${startTime}`);
    // console.log(`Commit time: ${commitTime}`);
    // console.log(`Interactions:`, interactions);
    // Xử lý thông tin render khác ở đây
  }
  return (
    <div>
      <Header1 />
      <DivBonus1 />
      <Header2 />

      <div>
        <Body />

        <Suspense fallback={<p>Loading</p>}>
          <Footer />
          {window.innerWidth < 750 ? <SearchPopUpMoblie /> : <></>}
        </Suspense>

        {window.innerWidth < 750 ? <MenuBarSmartf /> : <></>}

        <Suspense fallback={<p>Loading</p>}>
          <Filter />
        </Suspense>
      </div>
    </div>
  );
}

export default HomePage;
