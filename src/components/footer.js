import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-grayf7 w-full px-6 py-8">
        <div>
          <h2 className="font-size22 color222 font-bold text-left bg-f7 pb-c14">
            Inspiration for future getaways
          </h2>
          <div className="w-full relative   ">

            <div className="    absolute w-10  gradient-gray pb-c10       h-full left--24 flex pl-c13 items-center  color-gray7 ">
              <i class="fa-solid fa-angle-left"></i>
            </div>

            <div className=" overflow-auto border-b-1 border-gray-200 pb-c10        scrollable-element    overflow-y-hidden     ">
              <div className=" inline-flex         font-size14 text-gray7 w-auto font-semibold ">
                <div className=" flex pr-c14 py-c7 ">Popular</div>
                <div className=" flex px-c14 py-c7 whitespace-nowrap ">Arts & culture</div>
                <div className=" flex px-c14 py-c7">Outdoors</div>
                <div className=" flex px-c14 py-c7">Moutains</div>
                <div className=" flex px-c14 py-c7">Beach</div>
                <div className=" flex px-c14 py-c7 whitespace-nowrap ">Unique stays</div>
                <div className=" flex px-c14 py-c7">Categories</div>
                <div className=" flex px-c14 py-c7 whitespace-nowrap">Things to do</div>
                <div className=" flex px-c14 py-c7 whitespace-nowrap ">
                  Airbnb-friendly apartment
                </div>
              </div>
            </div>
            <div className="    absolute w-10  gradient-gray-toleft pb-c10      flex justify-center items-center   top-0 h-full right--24 color-gray7  ">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
