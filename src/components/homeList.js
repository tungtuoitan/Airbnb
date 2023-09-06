import React from "react";
import Item from "../components/item";
import owners from "../datas/owners";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { homeList } from "../datas/homeListOriginal";

export default function HomeList() {
  const displayItems = useSelector((state) => state.bodySlice.displayItems);

  return (
    <>
      {homeList.slice(0, displayItems).map((item, index) => {
        let owner = owners.find((x) => x.id === item.owner);

        return (
          <div className="ITEM_CONTAINERR  max-w-full  " key={item.id}>
            <Link to="/rooms" target="">
              <Item path={item.imgarr[0]} owner={owner} home={item} />
            </Link>
          </div>
        );
      })}
    </>
  );
}
