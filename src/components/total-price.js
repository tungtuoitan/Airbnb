import React from "react";

class TotalPrice extends React.Component {
  render() {
    return (
      <div className="totalprice    7:w-full border-gray-300 border-1 border-solid    rounded-xl text-c15 flex justify-between items-center h-c72 px-4">
        <div className=" 7:flex gap-c12">
          <p className="manrope-700  color222 text-left mb-c-3 ">
            Display total price
          </p>
          <div className="hidden 7:block w-c1 h-full bg-gray-300 text-transparent  ">
            .
          </div>
          <p className="text-gray7 ">Incude all fees, before taxes</p>
        </div>
        <div className="bg-gray-B0 w-12 h-8 rounded-2xl flex justify-start ">
          <div className="bg-white w-7 h-7 rounded-full m-c2  "></div>
        </div>
      </div>

    );
  }
}

export default TotalPrice;
