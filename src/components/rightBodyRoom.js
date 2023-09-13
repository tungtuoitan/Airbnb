import { useState, useRef, useEffect } from "react";
import StickyBill from "./stickyBill";
import { useDispatch, useSelector } from "react-redux";

export default function RightBodyRoom() {
  const isSticked = useSelector((s) => s.roomSlice.isSticked);
  const [width, setWidth] = useState(null);
  const rightRef = useRef(null);
  const [rightSpace, setRightSpace] = useState(0);

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

  useEffect(() => {
    console.log(isSticked);
    setRightSpace(
      window.innerWidth - rightRef.current.getBoundingClientRect().right
    );
  }, [isSticked]);

  return (
    <div
      ref={rightRef}
      className={`right-0   shrink-0  
      hidden 7:block   mt-12 mb-10 
      ${isSticked === 'sticked'? "fixed top-c90" 
      : isSticked ==='absolute' ? "absolute top-c90": 'static'}
      `}
      style={{ width: `${width}px`, right: `${rightSpace}px` }}
    >
      <StickyBill />
    </div>
  );
}
