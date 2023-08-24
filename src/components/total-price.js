import React from "react";
import Switch from "./switch";

class TotalPrice extends React.Component {
  render() {
    return (
      <div className="totalprice    7:w-full border-gray-300 border-1 border-solid    rounded-xl text-c15 flex justify-between items-center  p-4 ">
        <div className=" 7:flex gap-c12">
          <p className="manrope-700  color222 text-left mb-c-3 ">
            Display total price
          </p>
          <div className="hidden 7:block w-c1 h-full bg-gray-300 text-transparent  ">
            .
          </div>
          <p className="text-gray7 text-left leading-5 mt-c2 ">Incude all fees, before taxes</p>
        </div>
        <Switch/>
        
      </div>

    );
  }
}

export default TotalPrice;
