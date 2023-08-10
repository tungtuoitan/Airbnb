import React from "react";
import hometypeArr from "../datas/home-types.js";

class HometypeBar extends React.Component {
  render() {
    return (
      <div className="CONTAINERR    overflow-x-hidden inline-flex gap-5  border-b-1 7:gap-10  relative    ">

       

        {hometypeArr.map((item, index) => {
          return (
            <div
              key={item.id}
              className=" ITEM     py-4 inline-flex flex-col items-center flex-child"
            >
              <img src={item.path} className="w-6 h-6 opacity-60" />
              <span className=" text-c12 text-gray7 text-12 font-semibold mt-c5">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
export default HometypeBar;
