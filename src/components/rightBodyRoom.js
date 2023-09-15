import { useState, useRef, useEffect } from "react";
import StickyBill from "./stickyBill";

export default function RightBodyRoom() {
  const [width, setWidth] = useState(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth / 3.5 > 360) {
        setWidth(360);
      } else if (window.innerWidth / 3.5 < 230) {
        setWidth(230);
      } else {
        setWidth(window.innerWidth / 3.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={rightRef}
      className={`right-0  w-full w-4 shrink-0  
      hidden 7:block relative  mt-12 mb-10  `}
      style={{ width: `${width}px` }}
    >
      <StickyBill />
    </div>
  );
}
