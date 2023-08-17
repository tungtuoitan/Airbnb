import React, { useState, useEffect, useRef } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../datas/header1";
import Body from "../components/body";
import SearchPopUpMoblie from "../datas/search-popup-mobile";

function HomePage() {
  const [isScrollTop0,setIsScrollTop0]= useState(true)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY===0){
        setIsScrollTop0(true)
      }else{
        setIsScrollTop0(false)
      }
    })
  })
  return (
    <div>
        <Header1 />
        <div className="DIV_LÓT    w-full h-0 7:h-c16 bg-black "></div>
        <Header2 isScrollTop0={isScrollTop0} />

      <div className="">
        <Body />
        {/* <Footer /> */}
        <div className="DIV_LÓT  w-full h-10  "></div>
        {/* <SearchPopUpMoblie/> */}
        <MenuBarSmartf />
      </div>
    </div>
  );
}

export default HomePage;
