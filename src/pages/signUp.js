

import MenuBarSmartf from "../components/menu-bar-smartf";
import Confirm from "../components/confirm";
import FinishSigningUp from "../components/finishSiggningUp";
import MainSignUp from "../components/mainSignUp";

export default function SignUp() {

  return (
    <div className="w-full h-screen ">
      <div className="relative">
        <Confirm />
        <FinishSigningUp />
        <MainSignUp />
        <MenuBarSmartf />
      </div>
    </div>
  );
}
