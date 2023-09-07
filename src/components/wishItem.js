import useCreateList from "../hooks/useCreateList";
import { useState, useRef, useEffect } from "react";
import WishItemInfo from "./wishItemName";

export default function WishItem({ i }) {
  const currentHomeList = useCreateList().currentHomeList;
  const currentHome = currentHomeList[i];

  const [height, setHeight] = useState(0);
  const contRef = useRef(null);
  useEffect(() => {
    if (contRef.current) {
      setHeight(contRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="item h-full " ref={contRef}>
      <div
        className="IMG_CONTAINER  rounded-c077  w-full h-c112 
    overflow-hidden p-c3 7:p-c5 bg-white  box-shadow-u6 mb-c4  
    h-full "
        style={{ height: `${height}px` }}
      >
        <img
          src={currentHome.imgarr[0]}
          className=" min-h-full min-w-full object-cover rounded-xl 7:rounded-c070"
        />
      </div>
      <WishItemInfo currentHome={currentHome} />
    </div>
  );
}
