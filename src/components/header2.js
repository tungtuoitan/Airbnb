import React, { useState, useEffect, useRef } from "react";
import HometypeBar from "../components/hometype-bar";
import Header2Nav from "./header2_nav";
import $ from "jquery";
import Header1Mobile from "../datas/header1-mobile";

function Header2({isScrollTop0}) { 
  const [arrowLeftDisplay, setArrowLeftDisplay] = useState(false);
  const [arrowRightDisplay, setArrowRightDisplay] = useState(true);

  const homeTypeBarRef = useRef(null);
  const observerRef = useRef(null);

  const onClickLeftArrow = () => {
    $(".hometypebar-container").animate({ scrollLeft: "-=700" }, "slow");
  };
  const onClickRightArrow = () => {
    $(".hometypebar-container").animate({ scrollLeft: "+=700" }, "slow");
  };

  useEffect(() => {

    homeTypeBarRef.current.addEventListener('scroll',(e)=>{
      let widthofChild = e.target.children[0].clientWidth
      let widthOfEndScroll = widthofChild - e.target.clientWidth
      
      let scrollLeft = e.target.scrollLeft

      if(scrollLeft===0){
        setArrowLeftDisplay(false)
      }else{
        setArrowLeftDisplay(true)
      }
      if(scrollLeft=== widthOfEndScroll){
        setArrowRightDisplay(false)
      }else{
        setArrowRightDisplay(true)
      }
    })
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }}
  }, []);

  return (
    <div className={
      `HEADER_2     fixed top-0     bg-white z-10    7:pr-10 pl-6 7:pl-10 14:px-20 box-border
      
      ${isScrollTop0===true ? '' : 'box-shadow-header2' } 
      `
    }>
        <Header1Mobile/>
     
      <Header2Nav
        onClickLeftArrow={onClickLeftArrow}
        onClickRightArrow={onClickRightArrow}
        arrowLeftDisplay={arrowLeftDisplay}
        arrowRightDisplay={arrowRightDisplay}
        isScrollTop0={isScrollTop0}
      />

      <HometypeBar ref={homeTypeBarRef} isScrollTop0={isScrollTop0} />
    </div>
  );
}
export default Header2;
