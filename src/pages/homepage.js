import React, { useState, useEffect, useRef } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../datas/header1";
import Body from "../components/body";

function HomePage() {
  return (
    <div>
      <div className="TWO_HEADERS     sticky top-0 fixed w-full zmax bg-white top-0  overflow-hidden shadow-header-smartf      ">
        <Header1 />
        <Header2 />
      </div>

      <div className="">
        <Body />
        <Footer />
        <div className="w-full h-10  "></div>
        <MenuBarSmartf />
      </div>
    </div>
  );
}

export default HomePage;
