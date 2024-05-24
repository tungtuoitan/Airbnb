import MenuBarSmartf from "../components/menu-bar-smartf";
import MainLogin from "../components/mainLogin";
import Confirm from "../components/confirm";

export default function Login() {
  return (
    <div className=" w-full h-screen ">
      <div className="XXX relative   ">
        <Confirm />
        <MainLogin />
        <MenuBarSmartf />
      </div>
    </div>
  );
}
