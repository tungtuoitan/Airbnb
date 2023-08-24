import React from "react";
import ExploreBtn from "./exploreBtn";
import LogInBtn from "./logInBtn";
import WhistlistBtn from "./whistListsBtn";


class MenuBarSmartf extends React.Component {
  render() {
    return (
      <div className="text-gray7 flex justify-center text-c10 z10000 fixed bottom-0 w-full border-t-1-menubar bg-white ">
        <ExploreBtn />
        <WhistlistBtn />
        <LogInBtn />
      </div>
    );
  }
}

export default MenuBarSmartf;
