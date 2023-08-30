import AppleIcon from "./appleIcon";
import ArrowDownIcon from "./arrowDownIcon";
import ContinueBtn from "./continueBtn";
import FbIcon from "./fbIcon";
import GoolgeIcon from "./googleIcon";
import HeaderLoginPopUp from "./headerLoginPopUp";
import LoginPopUp from "./loginPopup";
import MailIcon from "./mailIcon";
import Welcome from "./welcome";
import PhoneNumberLists from "./phoneNumberLists";
import PhoneSection from './phoneSection'
import PrivacyText from "./privacyText";
import { useDispatch } from "react-redux";
import {toggleIsConfirmOpen} from '../reducer/loginSlice'
import NhapBtn from "./nhapBtn";
import ContinueBtnLog from "./continueBtnLog";

export default function FormLoginContainer() {
 

  return (
    <div className="">
      <Welcome />
      <form className="">
        <PhoneSection/>
        <PrivacyText/>
        <ContinueBtnLog/>
      </form>
    </div>
  );
}
