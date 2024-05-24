import { useState, useRef, useEffect } from "react";
import WishItemInfo from "./wishItemName";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentHomeId } from "../reducer/roomsSlice";

export default function WishItem({ i }) {
  const dispatch = useDispatch();
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);
  const currentHome = currentHomeList[i];
  const [height, setHeight] = useState(0);
  const contRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (contRef.current) {
        setHeight(contRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleOnClick = () => {
    dispatch(setCurrentHomeId(i));
  };

  return (
    <Link
      to="/rooms"
      className="item h-full "
      ref={contRef}
      onClick={handleOnClick}
    >
      <div
        className="IMG_CONTAINER  rounded-c077  w-full h-c112 overflow-hidden p-c3 7:p-c5 bg-white  box-shadow-u6 mb-c4 h-full"
        style={{ height: `${height}px` }}
      >
        <img
          src={currentHome.imgarr[0]}
          className=" min-h-full min-w-full object-cover rounded-xl 7:rounded-c070"
        />
      </div>
      <WishItemInfo currentHome={currentHome} />
    </Link>
  );
}
