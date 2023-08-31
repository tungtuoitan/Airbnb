import MenuBarSmartf from "../components/menu-bar-smartf";
import MainLogin from "../components/mainLogin";
import Confirm from "../components/confirm";
import FinishSigningUp from "../components/finishSiggningUp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FormLoginContainer from "../components/formLoginContainer";
import FbBtn from "../components/fbBtn";
export default function Login() {
  return (
    <div className=" w-full h-screen ">
      <div className="XXX relative   ">
        <Confirm />
        <FinishSigningUp />
        <MainLogin />
        <MenuBarSmartf />
      </div>
    </div>
  );
}
