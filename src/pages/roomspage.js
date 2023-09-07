import React from "react";
import GoodPrice from "../components/good-price";
import RoomInABarn from "../components/room-in-a-barn";
import homeFeatureIcons from '../components/home-feature-icons'
import HomeFeatures2 from "../components/home-features-2";
import MeetYourHost from "../components/meet-your-host";
import owners from "../datas/owners";
import WhatOffers from "../components/what-this-place-offers";
import AboutThisPlace from "../components/about-this-place";
import XNightsInX from "../components/x-nights-in-x";
import RoomBar from "../components/roomBar";
import SliceImg from "../components/sliceImg";

export default function RoomPage (){
    return (
      <div>
        <SliceImg/>

        {/* <GoodPrice/>
        <RoomInABarn feature={homeFeatureIcons}/>
        <HomeFeatures2 feature={homeFeatureIcons}/>
        <MeetYourHost owner ={owners[2]}/>
        <AboutThisPlace/>
        <WhatOffers/>
        <XNightsInX/> */}
      </div>
    )
  }


