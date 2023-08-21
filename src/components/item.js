import React, { useRef, useState } from "react";
import Slider from './slider2'
import InvisibleLayer from "./invisible-layer";
class Item extends React.Component {
  render() {
    const { home, owner, path } = this.props;
    return (
      <div className="ITEM max-w-full    "
      >
        <div className="SLIDER_CONTAINER        aspect-square  relative rounded-xl overflow-hidden mb-c14    ">
          <Slider path={path}/>
          <InvisibleLayer owner={owner}/>
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
            <span className="mr-c4 set-mt--c2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="star-letter"
              >
                <path
                  fillRule="evenodd"
                  d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                ></path>
              </svg>
            </span>
            <p className="font-normal ">{owner.account.rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
