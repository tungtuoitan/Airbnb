import React, { useState, useEffect, useRef } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../components/header1";
import Body from "../components/body";
import SearchPopUpMoblie from "../components/search-popup-mobile";
import { useSelector } from "react-redux";
import DivBonus1 from "../components/divBonus1";
import DivBonus2 from "../components/divBonus2";

function HomePage() {
  const [isScrollTop0, setIsScrollTop0] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setIsScrollTop0(true);
      } else {
        setIsScrollTop0(false);
      }
    });
  });
  return (
    <div className="">
      <Header1 />
      <DivBonus1 />
      <Header2 isScrollTop0={isScrollTop0} />

      <div className="">
        <Body />
        <Footer />
        <DivBonus2/>
        <SearchPopUpMoblie />
        <MenuBarSmartf />
      </div>
    </div>
  );
}

export default HomePage;
