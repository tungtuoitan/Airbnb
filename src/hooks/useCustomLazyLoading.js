import { useRef, useEffect, useState } from "react";
import { isElementInViewport } from "../function/checkIfItemInViewPort";

export const useCustomLazyLoading = () => {
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
  return { isInViewPort: isInViewPort, contRef: contRef };
};
