import React, { useRef } from "react";
import locationTypeArr from "../datas/location.js";
import LocationItem from "./location-item.js";
import ShowMoreBtn from "./showmore-btn.js";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "../reducer/footerSlice.js";

export default function LocationShortList (){
    const dispatch = useDispatch();
  const displayingIndex = useSelector(
    (state) => state.footerSlice.displayingIndex
  );
  const isShortList = useSelector((state) => state.footerSlice.isShortList);
  const numberOnShortList = useSelector(
    (state) => state.footerSlice.numberOnShortList
  );

  const onClickShowMore = () => {
    dispatch(showMore());
  };


    return (<>
    {isShortList === true
                ? locationTypeArr[displayingIndex].locationList
                    .slice(0, numberOnShortList)
                    .map((item, index) => {
                      return <LocationItem item={item} key={index} />;
                    })
                : locationTypeArr[displayingIndex].locationList.map(
                    (item, index) => {
                      return <LocationItem item={item} key = {index} />;
                    }
                  )}
              {/* button SHOW MORE */}
              {isShortList === true ? (
                <ShowMoreBtn onClickShowMore={onClickShowMore} />
              ) : (
                <></>
              )}
    
    </>)
}