import React, { useState, useEffect, useRef } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../datas/header1";
import Body from "../components/body";

function HomePage() {
  const [isScrollTop0, setIsScrollTop0] = useState(true);
  const [currentState, setCurrentState] = useState("normal");
  const handleOnClickSearchBox = () => {
    setCurrentState("clicked");
  };

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
    <div>
      <div className={`HEADER_1_CONTAINER      top-0 fixed      w-full zmax       bg-white top-0  overflow-hidden shadow-header-smartf      
       `}
      >
        <Header1 currentState={currentState} handleOnClickSearchBox={handleOnClickSearchBox}/>
      </div>
      <div className="w-full 7:h-20"></div>
      <Header2 isScrollTop0={isScrollTop0} />



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
