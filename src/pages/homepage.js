import React from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../components/header1";
import Body from "../components/body";
import SearchPopUpMoblie from "../components/search-popup-mobile";
import DivBonus1 from "../components/divBonus1";
import DivBonus2 from "../components/divBonus2";
import Filter from "../components/filter";

function HomePage() {
  
  return (
    <div>
      <Header1 />
      <DivBonus1 />
      <Header2  />

      <div>
        {/* <Body />
        <Footer />
        <DivBonus2/>
        <SearchPopUpMoblie />
        <MenuBarSmartf /> */}
        <Filter/>

      </div>
    </div>
  );
}

export default HomePage;
