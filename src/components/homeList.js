import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { IndexContext } from "../context/indexContext";
import useCreateList from "../hooks/useCreateList";
import { setCurrentHomeId } from "../reducer/roomsSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "./loading";
import Item from "../components/item"

export default function HomeList() {
  const dispatch = useDispatch();
  const displayItems = useSelector((state) => state.bodySlice.displayItems);
  const currentHomeList = useCreateList().currentHomeList;
  const handleOnClick = (index) => {
    dispatch(setCurrentHomeId(index));
  };
  return (
    <>
      {currentHomeList.slice(0, displayItems).map((item, index) => {
        return (
          <div className="ITEM_CONTAINERR  max-w-full  " key={item.id}>
            <Link to={`/rooms`} target="" onClick={() => handleOnClick(index)}>
              <IndexContext.Provider value={index}>
                  <Item />
              </IndexContext.Provider>
            </Link>
          </div>
        );
      })}
    </>
  );
}
