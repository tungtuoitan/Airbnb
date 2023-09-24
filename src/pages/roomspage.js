import React from "react";
import TitleContainer from "../components/titleContainer";
import ImgsOnLaptop from "../components/imgsOnLaptop";
import SliderOnMobile from "../components/sliderOnMobile";
import Header1a from "../components/header1a";
import BodyRoom from "../components/roomBody";
import FooterOnRoom from "../components/footerOnRoom";
import MeetYourHostContainer from "../components/meetYourHostContainer";
import ConfirmRequest from "../components/confirmRequest";
import {useState,useRef} from 'react'
import ShowFullImg from "../components/showFullImg";

export default function RoomPage() {
  return (
    <div className="overflow-clip  ">
      <Header1a />
      <SliderOnMobile />
      <TitleContainer />
      <ImgsOnLaptop />
      <BodyRoom />
      <MeetYourHostContainer />
      <FooterOnRoom />
      <ConfirmRequest />
      <ShowFullImg/>
    </div>
  );
}
