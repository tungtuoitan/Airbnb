import React, { lazy, Suspense } from "react";
import TitleContainer from "../components/titleContainer";
import ImgsOnLaptop from "../components/imgsOnLaptop";
import SliderOnMobile from "../components/sliderOnMobile";
import Header1a from "../components/header1a";
import BodyRoom from "../components/roomBody";
import FooterOnRoom from "../components/footerOnRoom";
import MeetYourHostContainer from "../components/meetYourHostContainer";
const ConfirmRequest = lazy(() => import("../components/confirmRequest"));
const ShowFullImg = lazy(() => import("../components/showFullImg"));

export default function RoomPage() {
  return (
    <div className="overflow-clip">
      {window.innerWidth < 750 ? true : <Header1a />}
      {window.innerWidth < 750 ? <SliderOnMobile /> : <ImgsOnLaptop />}

      <TitleContainer />
      <BodyRoom />

      <Suspense fallback={<>Loading ...</>}>
        <MeetYourHostContainer />
        <FooterOnRoom />
        <ConfirmRequest />
        <ShowFullImg />
      </Suspense>
    </div>
  );
}
