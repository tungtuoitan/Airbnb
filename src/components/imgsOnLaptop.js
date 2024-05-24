import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { ImgsOnLaptopUI } from "./imgsOnLaptopUI";

export default function ImgsOnLaptop() {
  const [height, setHeight] = useState(5);
  const contRef = useRef(null);
  const handleResize = () => {
    //# khi > 1130
    if (contRef.current && window.innerWidth >= 1130) {
      setHeight(window.innerHeight / 4);
      //# khi screen < 1130
    } else if (contRef.current && window.innerWidth < 1130) {
      setHeight(contRef.current.offsetWidth / 4);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentHomeId = useSelector((s) => s.roomSlice.currentHomeId);
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);
  const currentRoom = currentHomeList[currentHomeId];
  const imgArr = currentRoom.imgarr;

  return <ImgsOnLaptopUI ref={contRef} height={height} imgArr={imgArr} />;
}
