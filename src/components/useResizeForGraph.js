import { useState, useRef, useEffect } from "react";

export default function useResizeForGraph() {
    const [height, setHeight] = useState(0);
    const ulRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (ulRef && ulRef.current) {
        setHeight(ulRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { height, ulRef };
}
