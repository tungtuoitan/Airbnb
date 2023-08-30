import React from "react";
import ExploreBtn from "./exploreBtn";
import LogInBtn from "./logInBtn";
import WhistlistBtn from "./whistListsBtn";
import { useDispatch, useSelector } from "react-redux";
import InboxBtn from "./inboxBtn";
import TripsBtn from "./tripsBtn";

export default function MenuBarSmartf() {
  const isLogged = useSelector((state) => state.accSlice.isLogged);
  return (
    <div
      className="text-gray7 text-c10 || flex justify-center 
      ||  z10000 fixed bottom-0 w-full || border-t-1-menubar bg-white 7:hidden "
    >
      <ExploreBtn />
      <WhistlistBtn />
      {isLogged ? <TripsBtn /> : <></>}
      {isLogged ? <InboxBtn /> : <></>}
      <LogInBtn />
    </div>
  );
}
