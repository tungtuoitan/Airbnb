import {  useSelector } from "react-redux";
import SmaillPanelContainer from "./smaillPanelContainer";
import WhenPopUp from "./whenPopUp";

export default function WhenYourTrip() {
  let isWhenYourTripOpen = useSelector(
    (state) => state.root.isWhenYourTripOpen
  );

  return isWhenYourTripOpen === true ? <WhenPopUp /> : <SmaillPanelContainer />;
}
