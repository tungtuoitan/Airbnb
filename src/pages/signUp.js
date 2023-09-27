

import MenuBarSmartf from "../components/menu-bar-smartf";
import MainLogin from "../components/mainLogin";
import Confirm from "../components/confirm";
import FinishSigningUp from "../components/finishSiggningUp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormLoginContainer from "../components/formLoginContainer";
import FbBtn from "../components/fbBtn";
import MainSignUp from "../components/mainSignUp";
export default function SignUp() {
  console.clear()
  console.log('PHONE NUMBER: Xin nhập đủ 10 số bất kì ')
  return (
    <div className=" w-full h-screen ">
      <div className="XXX relative   ">
        <Confirm />
        <FinishSigningUp />
        <MainSignUp />
        <MenuBarSmartf />
      </div>
    </div>
  );
}
