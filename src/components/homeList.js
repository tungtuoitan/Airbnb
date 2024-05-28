import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IndexContext } from "../context/indexContext";
import { setCurrentHomeId } from "../reducer/roomsSlice";
import Item from "../components/item";

export default function HomeList() {
  const dispatch = useDispatch();
  const displayItems = useSelector((state) => state.bodySlice.displayItems);
  const currentHomeList = useSelector((s) => s.bodySlice.currentList);

  const handleOnClick = (e, index) => {
    if (
      e.target.getAttribute("name") !== "heart" &&
      e.target.getAttribute("name") !== "prev-btn" &&
      e.target.getAttribute("name") !== "next-btn"
    ) {
      dispatch(setCurrentHomeId(index));
      document.documentElement.scrollTop = "0px";
    }
  };

  return (
    <>
      {currentHomeList.slice(0, displayItems).map((item, index) => {
        return (
          <div
            className=" 16:border-c1 border-solid border-transparent max-w-full  "
            key={item.id}
          >
            <Link
              to={`/Airbnb/rooms`}
              target=""
              onClick={(e) => handleOnClick(e, index)}
            >
              <IndexContext.Provider value={item.id}>
                <Item />
              </IndexContext.Provider>
            </Link>
          </div>
        );
      })}
    </>
  );
}
