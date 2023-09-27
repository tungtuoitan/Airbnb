import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { IndexContext } from "../context/indexContext";
import useCreateList from "../hooks/useCreateList";
import { setCurrentHomeId } from "../reducer/roomsSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "./loading";
import Item from "../components/item";
import { shuffleNTimes } from "../function/shuffleArray";
import { useUpdateWidth } from "../hooks/useUpdateWidth";

export default function HomeList() {
  const dispatch = useDispatch();
  const displayItems = useSelector((state) => state.bodySlice.displayItems);
  const currentHomeList = useCreateList().currentHomeList;

  const handleOnClick = (e, index) => {
    if (e.target.getAttribute("name") !== "heart" &&
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
          <div className=" 16:border-c1 border-solid border-transparent max-w-full  " 
          key={item.id}>
            <Link
              to={`/rooms`}
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
