import React from "react";
import ShowMoreBtn from "./show-more-btn";

class AboutThisPlace extends React.Component {
  render() {
    return (
      <div className="px-6 py-8 text-left">
        <div className="pb-8 border-b-1 border-solid border-gray-300">
          <h2 className="font-size22 pb-c12 font-semibold color222 text-left">
            About this place
          </h2>
          <p className="text-base color222 mb-c10">
            Welcome to this charming apartment, the perfect base for your visit
            to Milan!
            <br /> Located in a quiet area of Milan, it is well connected to the
            city center (20 minutes) and the airport (15 minutes). Bus, tram,
            and train stops are just a few steps from home. The apartment is
            shared with me who will make sure you have everything you{" "}
          </p>
          <ShowMoreBtn />
        </div>
      </div>
    );
  }
}

export default AboutThisPlace;
