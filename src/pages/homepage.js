import React, { useState, useEffect, useRef } from "react";
import MenuBarSmartf from "../components/menu-bar-smartf";
import Footer from "../components/footer.js";

import Header2 from "../components/header2";
import Header1 from "../datas/header1";
import Body from "../components/body";

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
