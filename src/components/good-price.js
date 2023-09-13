import React from "react";
import GoodPriceIcon from "./goodPriceIcon";

export default function GoodPrice() {
    return (
      <div className=" mt-6 7:hidden ">
        <div className="py-5 border-b-1 border-t-1 border-solid border-gray-300 flex justify-center text-left leading-5">
          <div>
            <span className="font-bold text-black222">Good price. </span>
            <span className="text-black222">
              Your dates are less than the avg. nightly rate over the last 3
              months.
            </span>
          </div>
          <div className="w-8 ml-4">
            <GoodPriceIcon />
          </div>
        </div>
      </div>
    );
  }


