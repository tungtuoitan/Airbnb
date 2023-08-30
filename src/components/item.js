import React, { useRef, useState } from "react";
import Slider from "./slider2";
import InvisibleLayer from "./invisible-layer";
import { OwnerContext } from "../context/ownerContext";
import StarIcon from "./starIcon";
  export default function Item({home,owner,path}){

    return (
      <div className="ITEM max-w-full    ">
        <div className="SLIDER_CONTAINER        aspect-square  relative rounded-xl overflow-hidden mb-c14    ">
          <Slider path={path} />
          <OwnerContext.Provider value={owner}>
            <InvisibleLayer />
          </OwnerContext.Provider>
        </div>

        <div className="TEXT_CONTAINER   set-row-height grid-in-detail-item text-c15  unknown-leading-15 gap-c2 ">
          <div className="manrope-700 line">
            {home.city}, {home.country}
          </div>
          <div className="text-gray7 leading-5">
            <span>Stay with {owner.name}</span>
            <span className="m-c4">.</span>
            <span>{owner.more_info.work}</span> <span></span>
          </div>
          <div className="text-gray7">Jul 22 - 27</div>
          <div className="mt-c6">
            <span className="manrope-700 mr-c4">${home.price}</span>
            <span>night</span>
          </div>
          <div className="text-right flex justify-end items-center manrope-700">
            <StarIcon/>
            <p className="font-normal ">{owner.account.rating}</p>
          </div>
        </div>
      </div>
    );
  }


