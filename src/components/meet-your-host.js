import React from "react";
import ShowMoreBtn from "./show-more-btn";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import TitleOnRoom from "./titleOnRoom";
import TextToProtext from "./rightInfo";
import HostInfo from "./hostInfo";
import HostPopUp from "./hostPopUp";
import DuringYourStay from "./duringYourStay";
import XIsA from "./xIsA";
import ProtectIcon from "./protectIcon";
import RightInfo from "./rightInfo";

export default function MeetYourHost() {
  return (
    <div name='meetYourHost' className="bg-unknown-grayx  w-full pt-7 
    border-t-c1 border-solid border-gray-300">
      <TitleOnRoom title="About your host" />
      <div className=" 7:grid grid-cols-2 gap-c60">
        <div>
          <HostPopUp />
          <DuringYourStay />
          <XIsA />
        </div>
        <RightInfo />
      </div>
    </div>
  );
}
