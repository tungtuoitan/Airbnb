import React from "react";
import GoodPriceIcon from "./goodPriceIcon";

export default function GoodPrice2() {
    return (
        <div className="py-c16 border-b-1 bordernone
        border-t-1 border-solid border-gray-300  7:bg-gray-200 7:rounded-lg 7:mt-4
        flex justify-center text-left leading-5">
          <div className="pt-c4">
            <span className="font-bold text-black222">Good price. </span>
            <span className="text-black222 text-sm leading-snug">
              Your dates are less than the avg. nightly rate over the last 3
              months.
            </span>
          </div>
          <div className="w-8 ml-4">
            <GoodPriceIcon />
          </div>
        </div>
    );
  }


