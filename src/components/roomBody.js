import ShortDesc from "./shortDesc";
import XNightsInX from "./x-nights-in-x";
import WhereYouSleep from "./whereYouSleep";
import TextAboutOwner from "./TextAboutOwner";
import GoodPrice from "./good-price";
import SomeThingsAboutHome from "./someInforAboutHome";
import { homeFeatureIcons } from "./someInfosAboutHomeArr";
import MeetYourHost from "./meet-your-host";
import ShortAmenlities from "./shortAmenlities";
import LeftBodyRoom from "./leftBodyRoom";
import RightBodyRoom from "./rightBodyRoom";
import HeaderForBody from "./roomBodyBar";
import RoomBodyBar from "./roomBodyBar";
import RoomBottomBar from "./roomBottomBar";
import NotiContainer from "./notiContainer";

export default function BodyRoom() {
  return (
    <div className="relativex sticky top-10  ">
      <RoomBodyBar />
      <div className="flex w-screen justify-center   ">
        <div
          className="w-full px-6 7:px-10 11:px-20 13:px-0 
          relative 13:w-c1120 flex  
         "
        >
          <LeftBodyRoom />
          <RightBodyRoom />
        </div>
      </div>
      <NotiContainer />
      <RoomBottomBar />
    </div>
  );
}
