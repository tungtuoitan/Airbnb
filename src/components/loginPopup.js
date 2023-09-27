import FbBtn from "./fbBtn";
import FormLoginContainer from "./formLoginContainer";
import HeaderLoginPopUp from "./headerLoginPopUp";
import MainLoginPopUp from "./mainLoginPopUp";


export default function LoginPopUp() {
  return (
    <div className=" MAIN || overflow-hidden || 7:max-w-566 ||  
    7:border-c1 border-solid border-mdgray rounded-lg ">
      <HeaderLoginPopUp/>
      <MainLoginPopUp/>
    </div>
  );
}
