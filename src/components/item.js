import ImgGroup from "./imgGroup";
import TextGroup from "./textGroup";
// const ImgGroup = lazy(() => import("./imgGroup"));
// const TextGroup = lazy(() => import("./textGroup"));
import { lazy, Suspense } from "react";
import { isElementInViewport } from "../function/checkIfItemInViewPort";
import { useRef, useEffect, useState } from "react";

export default function Item() {
  const [isInViewPort, setIsInViewPort] = useState(false);
  const contRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (contRef.current) {
        if (isElementInViewport(contRef.current)) {
          setIsInViewPort(true);
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
    <div ref={contRef} className="ITEM max-w-full    ">
      {isInViewPort ? (
          <>
            <ImgGroup />
            <TextGroup />
          </>
          
      ) : (
        <div className=" w-full h-full opacity-50">Loading ...</div>
      )}
    </div>
  );
}
