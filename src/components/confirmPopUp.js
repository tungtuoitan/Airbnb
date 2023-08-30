import DidntGetCode from "./didntGetCode";
import HeaderPopUp from "./headerPopUp";
import InputConfirm from "./inputConfirm";
import ContinueBtn from "./continueBtn";
import EnterTheCode from "./enterTheCode";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsConfirmOpen,toggleIsFinishOpen } from "../reducer/loginSlice";

export default function ConfirmPopUp() {
  const code = useSelector((state) => state.loginSlice.code);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(toggleIsConfirmOpen());
  };
  const handleOnClickContinue = () => {
    if (code.length === 6) {
      dispatch(toggleIsConfirmOpen());
      dispatch(toggleIsFinishOpen())
    }
  };
  

  return (
    <div
      className="max-w-c568 w-full  zmax2  fixed bottom-0 7:bottom 7:static 
      bg-white rounded-t-2xl 7:rounded-2xl box-shadow-u7"
    >
      <HeaderPopUp
        title={"Confirm your number"}
        handleOnClick={handleOnClick}
      />
      <div className="MAIN    p-6">
        <EnterTheCode />
        <InputConfirm />
        <DidntGetCode />
        <div className="mt-10">
          <ContinueBtn isGray={code.length === 6 ? false : true} handleOnClick={handleOnClickContinue} />
        </div>
      </div>
    </div>
  );
}
