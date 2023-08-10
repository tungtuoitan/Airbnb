import React from "react";
import Calendar from "./calendar";

class XNightsInX extends React.Component {
  render() {
    return (
      <div className="px-6 py-8 text-left">
        <div>
          <div>
            <h2 className="font-size22 pb-c4 font-semibold color222 text-left">
              10 nights in Milano
            </h2>
            <p className="font-size14 text-gray7">Minmum stay: 4 nights</p>
          </div>
          <div>
            <Calendar/>
          </div>

        </div>
      </div>
    );
  }
}

export default XNightsInX;
