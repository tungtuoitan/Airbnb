import React from "react";
import Item from "../components/item";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { homeList } from "../datas/homeListOriginal";
import { IndexContext } from "../context/indexContext";
import useCreateList from "../hooks/useCreateList";

export default function HomeList() {
  const displayItems = useSelector((state) => state.bodySlice.displayItems);
  const currentHomeList = useCreateList().currentHomeList
  return (
    <>
      {currentHomeList.slice(0, displayItems).map((item, index) => {
        return (
          <div className="ITEM_CONTAINERR  max-w-full  " key={item.id}>
            <Link to="/rooms" target="">
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
