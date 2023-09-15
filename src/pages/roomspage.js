import React from "react";
import TitleContainer from "../components/titleContainer";
import ImgsOnLaptop from "../components/imgsOnLaptop";
import SliderOnMobile from "../components/sliderOnMobile";
import Header1a from "../components/header1a";
import BodyRoom from "../components/roomBody";
import FooterOnRoom from "../components/footerOnRoom";
import MeetYourHostContainer from "../components/meetYourHostContainer";
import RightBodyRoom from "../components/rightBodyRoom";

export default function RoomPage() {
  return (
    <div className="overflow-x-hiddenx   ">
      <Header1a />
      <SliderOnMobile />
      <TitleContainer />
      <ImgsOnLaptop />
      <BodyRoom />
      <MeetYourHostContainer />
      <FooterOnRoom />
    </div>
  );
}
