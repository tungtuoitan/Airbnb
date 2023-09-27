import EmtyDiv2 from "./emtyDiv2";
import OwnerAvtContainer from "./ownerAvtContainer";
import ThinRec from "./thinRectangle";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { IndexContext } from "../context/indexContext";
import { useEffect } from "react";
import { checkIsLaptop } from "../function/checkIsLaptop";
import { setIsHoverItem, setHoveringIndex } from "../reducer/bodySlice";
import { isElementInViewport } from "../function/checkIfItemInViewPort";

export default function BookContainer() {
  const [isOnMobileViewPort, setIsOnMobileViewPort] = useState(false);
  const dispatch = useDispatch();
  const bookRef = useRef(null);
  const i = useContext(IndexContext);
  const isHoverItem = useSelector((s) => s.bodySlice.isHoverItem);
  const hoveringIndex = useSelector((s) => s.bodySlice.hoveringIndex);
  useEffect(() => {
    const handleScroll = () => {
      if (bookRef.current) {
        if (!checkIsLaptop() && isElementInViewport(bookRef.current)) {
          setIsOnMobileViewPort(true);
        } else if (!checkIsLaptop() && !isElementInViewport(bookRef.current)) {
          setIsOnMobileViewPort(false);
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={bookRef}
      className={`relative trans-margin 
    ${isHoverItem && i === hoveringIndex ? "mb-c8" : ""}
    ${isOnMobileViewPort ? "mb-c8" : ""}`}
    >
      <EmtyDiv2 />

      <div
        className="bg-white w-16 flex  absolute top-0 left-0 
        border-r-1 border-solid border-gray-300  border-b-1 h-c72  
        rounded-book-icon"
      ></div>
      <div
        className={`bg-gray-200 w-16 flex  absolute top-0 left-0 
        border-r-1 border-solid border-gray-300  border-b-1 h-c72  rounded-book-icon
        trans-trans 
    ${isHoverItem && i === hoveringIndex ? "trans3d" : ""}
    ${isOnMobileViewPort ? "trans3d" : ""} `}
      >
        <ThinRec />
        <div className="flex items-center justify-center w-full  ">
          <OwnerAvtContainer />
        </div>
      </div>
    </div>
  );
}
