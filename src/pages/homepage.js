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
import { useConsoleLog } from "../hooks/useConsoleLog";
import PopUpFilter from "../components/popupFilter";
import createHomeList from "../function/createHomeList";
import { createTheme } from "@mui/material";

function HomePage() {
  useConsoleLog();
  return (
    <div>
      <Header1 />
      <DivBonus1 />
      <Header2 />

      <div>
        <Body />
        <Footer />
        <SearchPopUpMoblie />
        <MenuBarSmartf />
        <Filter />
      </div>
    </div>
  );
}

export default HomePage;
